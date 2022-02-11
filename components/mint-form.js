import { useWeb3 } from '@3rdweb/hooks'
import { useState } from 'react'
import Image from 'next/image'
import Image1 from '../public/images/mint/mint-1.jpg'
import Image2 from '../public/images/mint/mint-2.jpg'
import Web3 from 'web3'
import Noty from 'noty'

export default function MintForm() {
  const { address, provider } = useWeb3()

  const [value, setValue] = useState(1)

  const mintNft = async () => {
    try {
      const web3 = new Web3(provider.provider)
      const res = await fetch('/api/mint', {
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

  const handleSubmit = async (number) => {
    setValue(number)
    await mintNft()
  }

  return (
    <>
      <div className="row g-5 justify-content-center mt-3">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="upload-variant-wrapper">
            <div className="variant-preview">
              <Image src={Image1} alt="" />
            </div>
            <button
              onClick={() => handleSubmit(1)}
              className="btn btn-primary mt--20"
            >
              Mint ONE
            </button>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="upload-variant-wrapper">
            <div className="variant-preview">
              <Image src={Image2} alt="" />
            </div>
            <button
              onClick={() => handleSubmit(1)}
              className="btn btn-primary mt--20"
            >
              Mint TWO
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
