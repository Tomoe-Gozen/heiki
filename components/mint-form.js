import { useWeb3 } from '@3rdweb/hooks'
import { useEffect, useState } from 'react'
import Noty from 'noty'
import getContract from '../lib/getContract'
import mint from '../lib/mint'
import getTotalMintInfo from '../lib/getTotalMintInfo'
import Web3 from 'web3'
import TomoeGozenContract from '../contracts/TomoeGozen.json'

export default function MintForm() {
  const {
    address,
    connectWallet,
    chainId,
    activeProvider,
    connector,
    provider
  } = useWeb3()

  const [value, setValue] = useState(1)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)

  const clickConnectWallet = async () => {
    await connectWallet('injected')
  }

  const mintNft = async () => {
    try {
      const web3 = new Web3(provider.provider)
      const contract = await getContract(web3, TomoeGozenContract)
      const mintResponse = await mint(contract, address, value)
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
