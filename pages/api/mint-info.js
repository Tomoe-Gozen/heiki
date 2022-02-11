import Web3 from 'web3'
import getContractObj from './web3/getContract'
import TomoeGozenContract from './contracts/TomoeGozen.json'

const userHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).end('Only GET requests allowed')
      return
    }

    const web3 = new Web3(process.env.INFURA_URL)
    const { contract } = await getContractObj(web3, TomoeGozenContract)
    const totalSupply = await contract.methods.totalSupply().call()
    const maxSupply = process.env.MAX_SUPPLY

    res.status(200).json({ totalSupply, maxSupply })
  } catch (error) {
    res.status(500).end('Someting went wrong')
    return
  }

  // the rest of your code
}

export default userHandler
