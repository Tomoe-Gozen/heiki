import isWhiteListed from './isWhiteListed'

const mint = async (web3, contract, address, nMint) => {
  try {
    const mintPrice = await contract.methods.MINT_PRICE.call().call()
    const saleFlag = await contract.methods.saleFlag.call().call()

    switch (saleFlag) {
      case '1': {
        const whitelist = await isWhiteListed(address)
        if (whitelist.valid) {
          const balance = await contract.methods.balanceOf(address).call()
          if (balance >= 2) {
            return 'You have reached the max allowed quantity for the whitelist'
          } else {
            const merkleRoot = await contract.methods.merkleRoot.call().call()
            if (merkleRoot === whitelist.root) {
              console.log('here')
              const estimateGas = await contract.methods
                .mintWhitelist(nMint, whitelist.proof)
                .estimateGas({ from: address, value: mintPrice * nMint })
              console.log(estimateGas)

              const nonce = await web3.eth.getTransactionCount(address)
              console.log(nonce)

              const transactionEncoded = await contract.methods
                .mintWhitelist(nMint, whitelist.proof)
                .encodeABI()
              console.log(transactionEncoded)
              console.log(contract.address)

              const tx = {
                nonce: nonce,
                from: address,
                // 'to': '0xD03AEA1657cEe04c5857B2eB8b59Cb5FD5F2fa7F',
                value: mintPrice * nMint,
                gas: estimateGas,
                data: transactionEncoded,
                chain: 1337
                // 'gasPrice': gasPrice
              }
              await web3.eth.sendTransaction(tx)
              return 'Minted'
            } else {
              return 'You are not whitelisted'
            }
          }
        } else {
          return 'You are not whitelisted'
        }
      }
      case '2': {
        await contract.methods
          .mint(nMint)
          .send({ from: address, value: mintPrice * nMint })
        return 'Minted'
      }
      default:
        return 'Not activated yet'
    }
  } catch (error) {
    return 'something went wrong'
  }
}

export default mint
