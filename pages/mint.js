import { useAddress } from '@thirdweb-dev/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ConnectWallet from '../components/connect-wallet'
import Countdown from '../components/countdown'
import WithTitleLayout from '../components/layouts/with-title'
import Noty from 'noty'
import MintForm from '../components/mint-form'
import MintInfo from '../components/mint-info'
import config from '../config.json'

export default function Mint() {
  // trigger deploy
  const title = 'Heiki NFT - Mint'
  const description =
    '3333 female warriors picked up their weapons to fight for this world.'
  const image = '/images/og-image.png'

  const address = useAddress()
  const [alreadyMinted, setAlreadyMinted] = useState(null)
  const [maxSupply, setMaxSupply] = useState(null)
  const [nMinted, setnMinted] = useState(null)
  const [saleFlag, setSaleFlag] = useState(null)
  const [loading, setLoading] = useState(true)

  const increaseMinted = (number) => {
    setnMinted((minted) => parseInt(minted) + parseInt(number))
  }

  useEffect(() => {
    setLoading(true)
    const mintInfo = async () => {
      setAlreadyMinted(0)
      setMaxSupply(0)
      setnMinted(0)
      setSaleFlag(parseInt(0))
      setLoading(true)
      if (address) {
        try {
          const res = await fetch(`${config.apiUrl}/api/mint-info`, {
            body: JSON.stringify({
              address
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          })
          if (res.ok) {
            const { alreadyMinted, nMinted } = await res.json()
            setAlreadyMinted(alreadyMinted)
            setMaxSupply(config.maxSupply)
            setnMinted(nMinted)
            setSaleFlag(config.mintStatus)
            setLoading(false)
          } else {
            const error = await res.json()
            new Noty({
              type: res.status >= 500 ? 'error' : 'warning',
              text: error?.error
                ? error.error
                : 'Something went wrong, please refresh your browser',
              layout: 'top',
              timeout: 5000
            }).show()
          }
        } catch (error) {
          new Noty({
            type: 'error',
            text: error?.message
              ? error.message
              : 'Something went wrong, please refresh your browser',
            layout: 'top',
            timeout: 5000
          }).show()
          setLoading(false)
        }
      } else {
        setAlreadyMinted(null)
        setMaxSupply(null)
        setnMinted(null)
        setSaleFlag(null)
        setLoading(false)
      }
    }
    let timer = setTimeout(() => {
      mintInfo()
    }, 750)
    return () => {
      clearTimeout(timer)
    }
  }, [address])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://www.heikinft.com" />
        <meta property="og:site_name" content="Heiki" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@HeikiNFT" />
        <meta name="twitter:creator" content="@HeikiNFT" />
      </Head>
      <div className="rn-upload-variant-area varient">
        <div className="row min-vh-100">
          <div
            className={`${
              address ? 'col-lg-8' : 'col-lg-12'
            } col-12 mb-0 pt-5 mb-lg--100 pt-lg--120 d-flex flex-column flex-grow-1`}
          >
            {!loading && (
              <>
                <h3 className="title text-center">
                  {saleFlag === null && 'CONNECT YOUR WALLET'}
                  {saleFlag === 0 && ''}
                  {saleFlag === 1 && 'WHITELIST MINT'}
                  {saleFlag === 2 && 'PUBLIC SALE'}
                </h3>
                <h4 className="text-center text-secondary font-tomoe text-lg">
                  Mint price {saleFlag === 1 ? '0.065' : '0.08'} eth
                </h4>
              </>
            )}

            {loading && (
              <h4 className="text-center mt--10">
                <i className="fa fa-solid fa-circle-notch fa-spin mr--10"></i>{' '}
                Loading
              </h4>
            )}
            {!loading && !address && (
              <div className="row g-5 justify-content-center mt-3">
                <div className="col-xxl-5 col-lg-6 col-12 col-sm-6 sal-animate">
                  <div className="wallet-wrapper">
                    <div className="inner">
                      <div className="icon">
                        <i className="fa fa-user-lock custom-icon"></i>
                      </div>
                      <div className="content">
                        <h4 className="title">You are not connected</h4>
                        <p className="description">
                          You must be connected to MetaMask to mint a Heiki.
                        </p>
                        <div className="pt--20 text-center">
                          <ConnectWallet withoutLoading={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!loading && address && saleFlag > 0 && (
              <MintForm saleFlag={saleFlag} increaseMinted={increaseMinted} />
            )}
            {!loading && address && saleFlag === 0 && (
              <div
                className={`${saleFlag > 0 && 'mt-auto mb--25'} text-center`}
              >
                <h3 className="text-center mb-0">WHITELIST MINT STARTS IN</h3>
                <Countdown saleFlag={saleFlag} />
              </div>
            )}
            {!loading && address && saleFlag === 1 && (
              <div className="mt-md-auto mt--100 mb--25 text-center">
                <h5 className="text-center mb-0">Public Mint starts in:</h5>
                <Countdown saleFlag={saleFlag} />
              </div>
            )}
          </div>
          {address && (
            <div className="col-lg-4 col-12 pt-5 pb-5">
              <h3 className="title text-center">MINT INFOS</h3>
              <MintInfo
                alreadyMinted={alreadyMinted}
                saleFlag={saleFlag}
                loading={loading}
                maxSupply={maxSupply}
                nMinted={nMinted}
                setnMinted={setnMinted}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Mint.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Heiki MINT">{page}</WithTitleLayout>
}
