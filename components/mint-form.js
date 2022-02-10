import { useWeb3 } from '@3rdweb/hooks'
import { useState } from 'react'
import Web3 from 'web3'
import Noty from 'noty'

export default function MintForm() {
  const { address, provider } = useWeb3()

  const [value, setValue] = useState(1)

  const mintNft = async () => {
    try {
      const web3 = new Web3(provider.provider)
      const res = await fetch('http://localhost:3000/api/mint', {
        body: JSON.stringify({
          nMint: value,
          address
        }),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'localhost'
        },
        method: 'POST'
      })

      if (res.ok) {
        const transaction = await res.json()
        await web3.eth.sendTransaction(transaction)
      } else {
        const { error } = await res.json()
        new Noty({
          type: res.status >= 500 ? 'error' : 'warning',
          text: error,
          layout: 'top',
          timeout: 3000
        }).show()
      }
    } catch (error) {
      new Noty({
        type: 'error',
        text: error.message,
        layout: 'top',
        timeout: 3000
      }).show()
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await mintNft()
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
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
  )
}
