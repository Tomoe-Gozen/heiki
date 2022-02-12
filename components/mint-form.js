import { useWeb3 } from '@3rdweb/hooks'
import { useState } from 'react'
import ConnectWallet from './connect-wallet'
import Image from 'next/image'
import Image1 from '../public/images/mint/mint-1.jpg'
import Image2 from '../public/images/mint/mint-2.jpg'
import Web3 from 'web3'
import Noty from 'noty'

export default function MintForm() {
  const { address, provider } = useWeb3()
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState({
    one: false,
    two: false
  })
  const [minting, setMinting] = useState(false)

  const setLoader = (isLoading, isOne = false) => {
    setDisabled(isLoading)
    setLoading({
      one: isLoading ? isOne : false,
      two: isLoading ? !isOne : false
    })
  }

  const mintNft = async (number = 1) => {
    setLoader(true, number === 1)

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
          timeout: 3000
        }).show()
        setLoader(false, number === 1)
      } else {
        const { error } = await res.json()
        new Noty({
          type: res.status >= 500 ? 'error' : 'warning',
          text: error,
          layout: 'top',
          timeout: 3000
        }).show()
        setLoader(false, number === 1)
      }
    } catch (error) {
      new Noty({
        type: 'error',
        text: 'Your transaction has been cancel',
        layout: 'top',
        timeout: 3000
      }).show()
      setLoader(false, number === 1)
    }
  }

  const handleSubmit = async (number) => {
    await mintNft(number)
  }

  return (
    <>
      {disabled && (
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="place-bet-area into-banner mt_md--30 mt_sm--30">
              <p
                className="title mb--0 live-bidding-title sal-animate text-primary"
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
      {!address ? (
        <div className="row g-5 justify-content-center mt-3">
          <div className="col-xxl-5 col-lg-6 col-12 col-sm-6 sal-animate">
            <div className="wallet-wrapper">
              <div className="inner">
                <div className="icon">
                  <i data-feather="user-x"></i>
                </div>
                <div className="content">
                  <h4 className="title">You are not connected</h4>
                  <p className="description">
                    You must be connected to MetaMask for minting a Tomoe Gozen.
                  </p>
                  <div className="pt--20 text-center">
                    <ConnectWallet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row g-5 justify-content-center mt-3">
          <div className="col-lg-5 col-md-6 col-12">
            <div
              className="upload-variant-wrapper"
              onClick={() => handleSubmit(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="variant-preview">
                <Image src={Image1} alt="" />
              </div>
              <button
                onClick={() => handleSubmit(1)}
                className="btn btn-primary mt--20"
                disabled={disabled}
              >
                {loading.one ? (
                  <i className="fa fa-solid fa-circle-notch fa-spin"></i>
                ) : (
                  'Mint ONE'
                )}
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <div
              className="upload-variant-wrapper"
              onClick={() => handleSubmit(1)}
              style={{ cursor: 'pointer' }}
            >
              <div className="variant-preview">
                <Image src={Image2} alt="" />
              </div>
              <button
                onClick={() => handleSubmit(2)}
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
        </div>
      )}
    </>
  )
}
