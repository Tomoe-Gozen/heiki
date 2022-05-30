import Web3 from 'web3'
import contract from '../../lib/contract'
import TomoeGozenContract from '../../lib/contracts/TomoeGozen.json'
import TomoeGozenContractTest from '../../lib/contracts/AlphaTest2.json'

const mintInfoHandler = async (req, res) => {
  const { getContract } = contract()
  try {
    if (req.method !== 'POST') {
      res.status(405).end('Only POST requests allowed')
      return
    }

    const { address } = req.body

    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://:${process.env.INFURA_PROJECT_SECRET}@${process.env.INFURA_URL}`
      )
    )

    const { contract } = await getContract(
      web3,
      process.env.NEXT_PUBLIC_IS_PRODUCTION
        ? TomoeGozenContract
        : TomoeGozenContractTest
    )

    const alreadyMinted = await contract.methods.totalSupply().call()
    const maxSupply = process.env.MAX_SUPPLY
    const saleFlag = await contract.methods.saleFlag.call().call()
    // 0 - Mint not started yet, 1- Whitelist sale, 2 - Public Sale
    const nMinted = await contract.methods.balanceOf(address).call()

    res.status(200).json({ alreadyMinted, maxSupply, nMinted, saleFlag })
    return
  } catch (error) {
    res.status(500).json({
      error: 'Something went wrong'
    })
    return
  }
}

export default mintInfoHandler
