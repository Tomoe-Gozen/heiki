import keccak256 from 'keccak256'
import MerkleTree from 'merkletreejs'
import config from '../config.json'

export default function contract() {
  const getContract = async (web3, contractDefinition) => {
    // get network ID and the deployed address
    const networkId = await web3.eth.net.getId()
    const deployedAddress = contractDefinition.networks[networkId]

    // create the instance
    const contract = new web3.eth.Contract(
      contractDefinition.abi,
      deployedAddress && deployedAddress.address
    )
    return {
      contract,
      deployedAddress,
      networkId
    }
  }

  const isWhitelisted = async (address) => {
    const response = await fetch(`${config.s3}/wl.json`)
    const whitelist = await response.json()
    const hashedAddresses = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
      sortPairs: true
    })
    const hashedAddress = keccak256(address)
    const proof = merkleTree.getHexProof(hashedAddress)
    const root = merkleTree.getHexRoot()

    const valid = merkleTree.verify(proof, hashedAddress, root)
    return {
      valid,
      proof,
      root
    }
  }

  return {
    isWhitelisted,
    getContract
  }
}
