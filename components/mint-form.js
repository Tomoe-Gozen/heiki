import { useWeb3 } from '@3rdweb/hooks'
import { useState } from 'react'
import Image from 'next/image'
import Image1 from '../public/images/mint/mint-1.jpg'
import Image2 from '../public/images/mint/mint-2.jpg'
import Image3 from '../public/images/mint/mint-3.jpg'
import Web3 from 'web3'
import Noty from 'noty'

export default function MintForm({ saleFlag }) {
  const { address, provider, chainId } = useWeb3()
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState({
    one: false,
    two: false
  })

  const setLoader = (isLoading, number = 1) => {
    setDisabled(isLoading)
    setLoading({
      one: isLoading ? number === 1 : false,
      two: isLoading ? number === 2 : false,
      three: isLoading ? number === 3 : false
    })
  }

  const mintNft = async (number = 1) => {
    if (!address) {
      // not connected
      return
    }
    setLoader(true, number)

    try {
      const web3 = new Web3(provider.provider)
      const res = await fetch('/api/mint', {
        body: JSON.stringify({
          nMint: number,
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
        new Noty({
          type: 'success',
          text: `You successfully minted your ${number} Tomoe Gozen!`,
          layout: 'top',
          timeout: 5000
        }).show()
        setLoader(false, number)
      } else {
        const { error } = await res.json()
        new Noty({
          type: res.status >= 500 ? 'error' : 'warning',
          text: error,
          layout: 'top',
          timeout: 5000
        }).show()
        setLoader(false, number)
      }
    } catch (error) {
      new Noty({
        type: 'warning',
        text: 'You transaction has been canceled, please retry.',
        layout: 'top',
        timeout: 5000
      }).show()
      setLoader(false, number)
    }
  }

  const rightChainId = process.env.NEXT_PUBLIC_IS_PRODUCTION
    ? chainId === 1
    : chainId === 4

  const handleSubmit = async (number) => {
    if (rightChainId) {
      await mintNft(number)
    } else {
      new Noty({
        type: 'error',
        text: process.env.NEXT_PUBLIC_IS_PRODUCTION
          ? 'Your are on a test network, please switch to the mainnet.'
          : 'Your are on the mainnet network, please switch to a the Rinkeby test network.',
        layout: 'top',
        timeout: 5000
      }).show()
    }
  }

  return (
    <>
      {disabled && (
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="place-bet-area into-banner mt_md--30 mt_sm--30">
              <p
                className="title mb--0 live-bidding-title sal-animate text-theme"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <strong>
                  We are minting your Tomoe Gozen NFT 🤘 <br />
                  Open MetaMask, confirm the transaction then please wait a
                  minute...
                </strong>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="row g-5 justify-content-center m-3">
        <div className="col-xl-4 col-6">
          <div
            className="upload-variant-wrapper"
            onClick={() => handleSubmit(1)}
            style={{ cursor: 'pointer' }}
          >
            <div className="variant-preview">
              <Image src={Image1} alt="" />
            </div>
            <button className="btn btn-primary mt--20" disabled={disabled}>
              {loading.one ? (
                <i className="fa fa-solid fa-circle-notch fa-spin"></i>
              ) : (
                'Mint ONE'
              )}
            </button>
          </div>
        </div>
        <div className="col-xl-4 col-6">
          <div
            className="upload-variant-wrapper"
            onClick={() => handleSubmit(2)}
            style={{ cursor: 'pointer' }}
          >
            <div className="variant-preview">
              <Image src={Image2} alt="" />
            </div>
            <button
              className="btn btn-primary mt--20 btn-disabled"
              disabled={disabled}
            >
              {loading.two ? (
                <i className="fa fa-solid fa-circle-notch fa-spin"></i>
              ) : (
                'Mint TWO'
              )}
            </button>
          </div>
        </div>
        {saleFlag === 2 && (
          <div className="col-xl-4 col-6">
            <div
              className="upload-variant-wrapper"
              onClick={() => handleSubmit(3)}
              style={{ cursor: 'pointer' }}
            >
              <div className="variant-preview">
                <Image src={Image3} alt="" />
              </div>
              <button className="btn btn-primary mt--20" disabled={disabled}>
                {loading.three ? (
                  <i className="fa fa-solid fa-circle-notch fa-spin"></i>
                ) : (
                  'Mint THREE'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
