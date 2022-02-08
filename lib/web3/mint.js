import isWhiteListed from './isWhiteListed'

const mint = async (contract, address, nMint) => {
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
              await contract.methods
                .mintWhitelist(nMint, whitelist.proof)
                .send({ from: address, value: mintPrice * nMint })
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
