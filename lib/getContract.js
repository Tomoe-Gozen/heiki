const getContract = async (web3, contractDefinition) => {
  // get network ID and the deployed address
  const networkId = await web3.eth.net.getId()
  const deployedAddress = contractDefinition.networks[networkId]

  // create the instance
  const instance = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress && deployedAddress.address
  )
  return instance
}

export default getContract
