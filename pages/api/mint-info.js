import Web3 from 'web3'
import getContractObj from './web3/getContract'
import TomoeGozenContract from './contracts/TomoeGozen.json'
import TomoeGozenContractTest from './contracts/AlphaTest.json'
import { Buffer } from 'buffer'

const mintInfoHandler = async (req, res) => {
  /* try { */
  if (req.method !== 'POST') {
    res.status(405).end('Only POST requests allowed')
    return
  }

  const { address } = req.body

  const authorization = Buffer.from(
    `${process.env.INFURA_PROJECT_ID}:${process.env.INFURA_PROJECT_SECRET}`
  ).toString('base64')

  const options = {
    headers: [
      {
        name: 'Authorization',
        value: `Base ${authorization}`
      }
    ]
  }

  const web3 = new Web3(
    new Web3.providers.HttpProvider(process.env.INFURA_URL, options)
  )
  try {
    const { contract } = await getContractObj(
      web3,
      process.env.NEXT_PUBLIC_IS_PRODUCTION
        ? TomoeGozenContract
        : TomoeGozenContractTest
    )
  } catch (e) {
    res.status(500).json({
      error: 'bite'
    })
    return
  }
  const alreadyMinted = await contract.methods.totalSupply().call()
  const maxSupply = process.env.MAX_SUPPLY
  const saleFlag = await contract.methods.saleFlag.call().call()
  // 0 - Mint not started yet, 1- Whitelist sale, 2 - Public Sale
  const nMinted = await contract.methods.balanceOf(address).call()

  res.status(200).json({ alreadyMinted, maxSupply, nMinted, saleFlag })
  return
  /* } catch (error) {
    res.status(500).json({
      error: "Something went wrong"
    })
    return
  } */
}

export default mintInfoHandler
