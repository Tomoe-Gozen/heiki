import { useWeb3 } from '@3rdweb/hooks'
import { useEffect, useState } from 'react'
import getContractObj from '../lib/web3/getContract'
import mint from '../lib/web3/mint'
import getTotalMintInfo from '../lib/web3/getTotalMintInfo'
import Web3 from 'web3'
import TomoeGozenContract from '../pages/api/contracts/TomoeGozen.json'

export default function MintForm() {
  const { address, provider } = useWeb3()

  const [value, setValue] = useState(1)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)

  const mintNft = async () => {
    try {
      const web3 = new Web3(provider.provider)
      const contract = await getContractObj(web3, TomoeGozenContract)
      const mintResponse = await mint(web3, contract, address, value)
      const mintProgress = await getTotalMintInfo(contract)
      setTotalMinted(mintProgress.totalMinted)
      setMaxSupply(mintProgress.maxSupply)
      // await this.mintInfo();
    } catch (error) {}
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await mintNft()
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <div>
        Minted: {totalMinted} of {maxSupply}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          How many do you want to mint:
          <select value={value} onChange={handleChange}>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </label>
        <input type="submit" value="Mint" />
      </form>
    </div>
  )
}
