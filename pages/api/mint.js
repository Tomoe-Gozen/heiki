import Web3 from 'web3'
import contractLib from '../../lib/contract'
import HeikiContract from '../../lib/contracts/production.json'
import HeikiContractTest from '../../lib/contracts/test.json'
import config from '../../config.json'

const mintHandler = async (req, res) => {
  const { getContract } = contractLib()

  if (req.method !== 'POST') {
    res.status(405).end('Only POST requests allowed')
    return
  }

  const { address, nMint } = req.body

  if (nMint > parseInt(config.maxMint, 10)) {
    res
      .status(422)
      .json({ error: 'Max amount allowed per transaction was exceeded' })
    return
  }

  const web3 = new Web3(new Web3.providers.HttpProvider(config.infuraUrl))
  const { contract, deployedAddress, networkId } = await getContract(
    web3,
    config.isProduction ? HeikiContract : HeikiContractTest
  )

  const saleFlag = config.mintStatus
  switch (saleFlag) {
    case 0: {
      res.status(405).json({ error: 'Mint does not started yet' })
      return
    }
    case 1: {
      const response = await fetch(`${config.s3}/wl.json`)
      const whitelists = await response.json()
      const isWhitelisted = whitelists.some((w) => w === address)

      if (isWhitelisted) {
        const balance = await contract.methods.getNMinted(address).call()

        if (balance >= parseInt(config.presaleMaxMint, 10)) {
          res.status(409).json({
            error: 'You have reached the max allowed quantity for the whitelist'
          })
          return
        } else {
          const nonce = await web3.eth.getTransactionCount(address)
          const transactionEncoded = await contract.methods
            .mint(nMint)
            .encodeABI()
          const mintPrice = web3.utils.toWei(
            config.presaleMintPrice.toString(),
            'ether'
          )

          const rawTransaction = {
            nonce: nonce,
            from: address,
            to: deployedAddress.address,
            value: mintPrice * nMint,
            data: transactionEncoded,
            chain: networkId
          }
          res.status(200).json(rawTransaction)
          return
        }
      } else {
        res.status(405).json({ error: 'You are not whitelisted' })
        return
      }
    }
    case 2: {
      const nonce = await web3.eth.getTransactionCount(address)
      const transactionEncoded = await contract.methods.mint(nMint).encodeABI()
      const mintPrice = web3.utils.toWei(config.mintPrice.toString(), 'ether')

      const rawTransaction = {
        nonce: nonce,
        from: address,
        to: deployedAddress.address,
        value: mintPrice * nMint,
        data: transactionEncoded,
        chain: networkId
      }
      res.status(200).json(rawTransaction)
      return
    }
    default:
      res.status(500).json({ error: 'Mint Status must be between 0 and 2' })
      return
  }
}

export default mintHandler
