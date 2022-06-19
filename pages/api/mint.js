import Web3 from 'web3'
import contract from '../../lib/contract'
import TomoeGozenContract from '../../lib/contracts/TomoeGozen.json'
import TomoeGozenContractTest from '../../lib/contracts/Alphav3.json'

const mintHandler = async (req, res) => {
  const { isWhitelisted, getContract } = contract()

  try {
    if (req.method !== 'POST') {
      res.status(405).end('Only POST requests allowed')
      return
    }

    const { address, nMint } = req.body

    if (nMint > parseInt(process.env.MINT_MAX_PER_TRANSACTION, 10)) {
      res
        .status(422)
        .json({ error: 'Max amount allowed per transaction was exceeded' })
      return
    }

    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://:${process.env.INFURA_PROJECT_SECRET}@${process.env.INFURA_URL}`
      )
    )
    const { contract, deployedAddress, networkId } = await getContract(
      web3,
      process.env.NEXT_PUBLIC_IS_PRODUCTION === 'true'
        ? TomoeGozenContract
        : TomoeGozenContractTest
    )

    const saleFlag = await contract.methods.saleFlag.call().call()

    switch (saleFlag) {
      case '0': {
        res.status(405).json({ error: 'Mint does not started yet' })
        return
      }
      case '1': {
        const whitelist = await isWhitelisted(address)
        // whitelist valid
        if (whitelist.valid) {
          const balance = await contract.methods.balanceOf(address).call()
          if (balance >= parseInt(process.env.MINT_MAX_ALLOWED_WHITELIST, 10)) {
            res.status(409).json({
              error:
                'You have reached the max allowed quantity for the whitelist'
            })
            return
          } else {
            const merkleRoot = await contract.methods.merkleRoot.call().call()
            if (merkleRoot === whitelist.root) {
              const nonce = await web3.eth.getTransactionCount(address)
              const transactionEncoded = await contract.methods
                .mintWhitelist(nMint, whitelist.proof)
                .encodeABI()
              const mintPrice = web3.utils.toWei(
                process.env.PRESALE_MINT_PRICE,
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
            } else {
              res
                .status(405)
                .json({ error: 'You are not whitelisted (error code: 1)' })
              return
            }
          }
        } else {
          res
            .status(405)
            .json({ error: 'You are not whitelisted (error code: 2)' })
          return
        }
      }
      case '2': {
        const nonce = await web3.eth.getTransactionCount(address)
        const transactionEncoded = await contract.methods
          .mint(nMint)
          .encodeABI()
        const mintPrice = web3.utils.toWei(
          process.env.PUBLIC_MINT_PRICE,
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
      default:
        res.status(500).json({ error: 'Someting went wrong' })
        return
    }
  } catch (error) {
    res.status(500).json({ error: 'Someting went wrong' })
    return
  }
}

export default mintHandler
