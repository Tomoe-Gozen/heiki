const getTotalMintInfo = async (contract) => {
  const maxSupply = await contract.methods.MAX_SUPPLY.call().call()
  const totalSupply = await contract.methods.totalSupply().call()

  return {
    totalMinted: totalSupply,
    maxSupply: maxSupply
  }
}

export default getTotalMintInfo
