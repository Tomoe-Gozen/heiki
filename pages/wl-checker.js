import Head from 'next/head'
import WithTitleLayout from '../components/layouts/with-title'
import MintForm from '../components/mint-form'
import ConnectWallet from '../components/connect-wallet'
import MintInfo from '../components/mint-info'
import Countdown from '../components/countdown'
import { useWeb3 } from '@3rdweb/hooks'
import Noty from 'noty'
import { useEffect, useState } from 'react'

export default function Mint() {
  const title = 'Heiki NFT - WL Checker'
  const description =
    '3333 female warriors picked up their weapons to fight for this world.'
  const image = '/images/og-image.png'

  const { address } = useWeb3()
  const [isWhitelisted, setIsWhitelisted] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const checkWl = async () => {
      setLoading(false)
      if (address) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL_API}/api/whitelist/${address}`
          )
          if (res.ok) {
            const { whitelisted } = await res.json()
            setIsWhitelisted(whitelisted)
            setLoading(false)
          } else {
            const error = await res.json()
            new Noty({
              type: res.status >= 500 ? 'error' : 'warning',
              text: error,
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
        setLoading(false)
      }
    }
    let timer = setTimeout(() => {
      checkWl()
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
                <h3 className="title text-center">Am I whitelisted</h3>
                <h4 className="text-center text-secondary font-tomoe text-lg">
                  for Heiki?
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
                          You must be connected to MetaMask to check if you are
                          whitelisted for mint a Heiki NFT.
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

            {!loading && address && <p>{isWhitelisted ? 'true' : 'false'}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

Mint.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Whitelist Checker">{page}</WithTitleLayout>
}