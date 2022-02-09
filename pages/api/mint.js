import Web3 from 'web3'
import getContractObj from '../../lib/web3/getContract'
import isWhiteListed from '../../lib/web3/isWhiteListed'
import TomoeGozenContract from './contracts/TomoeGozen.json'

const userHandler = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).end('Only POST requests allowed')
      return
    }

    const { address, nMint } = req.body

    if (nMint > parseInt(process.env.MINT_MAX_PER_TRANSACTION, 10)) {
      res.status(422).end('Max amount allowed per transaction was exceeded')
      return
    }

    const web3 = new Web3(process.env.INFURA_URL)
    const { contract, deployedAddress, networkId } = await getContractObj(
      web3,
      TomoeGozenContract
    )

    const mintPrice = web3.utils.toWei(process.env.MINT_PRICE, 'ether')
    const saleFlag = await contract.methods.saleFlag.call().call()

    switch (saleFlag) {
      case '0': {
        res.status(405).end('Mint does not started yet')
        return
      }
      case '1': {
        const whitelist = await isWhiteListed(address)
        if (whitelist.valid) {
          const balance = await contract.methods.balanceOf(address).call()
          if (balance >= parseInt(process.env.MINT_MAX_ALLOWED_WITHELIST, 10)) {
            res
              .status(409)
              .end(
                'You have reached the max allowed quantity for the whitelist'
              )
            return
          } else {
            const merkleRoot = await contract.methods.merkleRoot.call().call()
            if (merkleRoot === whitelist.root) {
              const estimateGas = await contract.methods
                .mintWhitelist(nMint, whitelist.proof)
                .estimateGas({ from: address, value: mintPrice * nMint })

              const nonce = await web3.eth.getTransactionCount(address)
              const transactionEncoded = await contract.methods
                .mint(nMint)
                .encodeABI()

              const rawTransaction = {
                nonce: nonce,
                from: address,
                // 'to': '0xD03AEA1657cEe04c5857B2eB8b59Cb5FD5F2fa7F',
                value: mintPrice * nMint,
                gas: estimateGas,
                data: transactionEncoded,
                chain: networkId
                // 'gasPrice': gasPrice
              }
              // await this.mintInfo();
              res.status(200).json(rawTransaction)
            } else {
              res.status(405).end('You are not whitelisted')
              return
            }
          }
        } else {
          res.status(405).end('You are not whitelisted')
          return
        }
      }
      case '2': {
        const nonce = await web3.eth.getTransactionCount(address)
        const estimateGas = await contract.methods
          .mint(nMint)
          .estimateGas({ from: address, value: mintPrice * nMint })
        const transactionEncoded = await contract.methods
          .mint(nMint)
          .encodeABI()

        const rawTransaction = {
          nonce: nonce,
          from: address,
          // 'to': '0xD03AEA1657cEe04c5857B2eB8b59Cb5FD5F2fa7F',
          value: mintPrice * nMint,
          gas: estimateGas,
          data: transactionEncoded,
          chain: networkId
          // 'gasPrice': gasPrice
        }
        // await this.mintInfo();
        res.status(200).json(rawTransaction)
      }
      default:
        res.status(500).end('Someting went wrong')
        return
    }
    const mintProgress = await getTotalMintInfo(contract)
    setTotalMinted(mintProgress.totalMinted)
    setMaxSupply(mintProgress.maxSupply)
  } catch (error) {
    res.status(500).end('Someting went wrong')
    return
  }

  // the rest of your code
}

export default userHandler
