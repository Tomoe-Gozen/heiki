import Web3 from 'web3'
import contract from '../../lib/contract'
import HeikiContract from '../../lib/contracts/production.json'
import HeikiContractTest from '../../lib/contracts/test.json'
import config from '../../config.json'

const mintInfoHandler = async (req, res) => {
  const { getContract } = contract()
  try {
    if (req.method !== 'POST') {
      res.status(405).end('Only POST requests allowed')
      return
    }

    const { address } = req.body

    const web3 = new Web3(new Web3.providers.HttpProvider(config.infuraUrl))

    const { contract } = await getContract(
      web3,
      config.isProduction ? HeikiContract : HeikiContractTest
    )

    const alreadyMinted = await contract.methods.totalSupply().call()
    const nMinted = await contract.methods.getNMinted(address).call()

    res.status(200).json({ alreadyMinted, nMinted })
    return
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      error: 'Something went wrong'
    })
    return
  }
}

export default mintInfoHandler
