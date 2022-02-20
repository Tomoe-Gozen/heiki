import Web3 from 'web3'
import getContractObj from './web3/getContract'
import isWhiteListed from './lib/isWhiteListed'
import TomoeGozenContract from './contracts/AlphaTest.json'
import TomoeGozenContractTest from './contracts/AlphaTest.json'

const mintHandler = async (req, res) => {
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

    const web3 = new Web3(process.env.INFURA_URL)
    const { contract, deployedAddress, networkId } = await getContractObj(
      web3,
      process.env.NEXT_PUBLIC_IS_PRODUCTION
        ? TomoeGozenContract
        : TomoeGozenContractTest
    )

    const mintPrice = web3.utils.toWei(process.env.MINT_PRICE, 'ether')
    const saleFlag = await contract.methods.saleFlag.call().call()

    switch (saleFlag) {
      case '0': {
        res.status(405).json({ error: 'Mint does not started yet' })
        return
      }
      case '1': {
        const whitelist = await isWhiteListed(address)
        if (whitelist.valid) {
          const balance = await contract.methods.balanceOf(address).call()
          if (balance >= parseInt(process.env.MINT_MAX_ALLOWED_WITHELIST, 10)) {
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

              const rawTransaction = {
                nonce: nonce,
                from: address,
                to: deployedAddress.address,
                value: mintPrice * nMint,
                data: transactionEncoded,
                chain: networkId
              }
              res.status(200).json(rawTransaction)
            } else {
              res.status(405).json({ error: 'You are not whitelisted' })
              return
            }
          }
        } else {
          res.status(405).json({ error: 'You are not whitelisted' })
          return
        }
      }
      case '2': {
        const nonce = await web3.eth.getTransactionCount(address)
        const transactionEncoded = await contract.methods
          .mint(nMint)
          .encodeABI()

        const rawTransaction = {
          nonce: nonce,
          from: address,
          to: deployedAddress.address,
          value: mintPrice * nMint,
          data: transactionEncoded,
          chain: networkId
        }
        // await this.mintInfo();
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

  // the rest of your code
}

export default mintHandler
