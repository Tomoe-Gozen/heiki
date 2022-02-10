import keccak256 from 'keccak256'
import MerkleTree from 'merkletreejs'
import whitelist from '../data/whitelist.json'

const isWhiteListed = async (address) => {
  const hashedAddresses = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
    sortPairs: true
  })
  const hashedAddress = keccak256(address)
  const proof = merkleTree.getHexProof(hashedAddress)
  const root = merkleTree.getHexRoot()
  // uncomment to get the merkle root
  console.log(root)
  const valid = merkleTree.verify(proof, hashedAddress, root)
  return {
    valid,
    proof,
    root
  }
}

export default isWhiteListed
