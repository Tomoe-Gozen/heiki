import Head from 'next/head'
import WithTitleLayout from '../components/layouts/with-title'
import MintForm from '../components/mint-form'
import ConnectWallet from '../components/connect-wallet'
import MintInfo from '../components/mint-info'
import PreSale from '../components/pre-sale'
import { useWeb3 } from '@3rdweb/hooks'
import Noty from 'noty'
import { useEffect, useState } from 'react'

export default function Mint() {
  const title = 'Tomoe Gozen NFT - Mint'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  const { address } = useWeb3()
  const [alreadyMinted, setAlreadyMinted] = useState(null)
  const [maxSupply, setMaxSupply] = useState(null)
  const [nMinted, setnMinted] = useState(null)
  const [saleFlag, setSaleFlag] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const mintInfo = async () => {
      if (address) {
        try {
          const res = await fetch('/api/mint-info', {
            body: JSON.stringify({
              address
            }),
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'localhost'
            },
            method: 'POST'
          })

          if (res.ok) {
            const { alreadyMinted, maxSupply, nMinted, saleFlag } =
              await res.json()
            setAlreadyMinted(alreadyMinted)
            setMaxSupply(maxSupply)
            setnMinted(nMinted)
            setSaleFlag(parseInt(saleFlag))
            setLoading(false)
          } else {
            const { error } = await res.json()
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
            text: error.message,
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

    // let timer = setTimeout(() => {
    mintInfo()
    // }, 500)
    // return () => {
    //   clearTimeout(timer)
    // }
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
        <meta property="og:url" content="https://www.tomoegozen.io" />
        <meta property="og:site_name" content="Tomoe Gozen" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@TomoeGozenNFTs" />
        <meta name="twitter:creator" content="@TomoeGozenNFTs" />
      </Head>
      <div className="rn-upload-variant-area varient min-vh-100">
        <div className="row">
          <div
            className={`${
              address ? 'col-lg-8' : 'col-lg-12'
            } col-12 mb-0 pt-5 mb-lg--100 pt-lg--120`}
          >
            {!loading && (
              <>
                <h3 className="title text-center">
                  {saleFlag === 0
                    ? 'Tomoe Gozen PRESALE'
                    : 'Mint a Tomoe Gozen'}
                </h3>
                <h4 className="text-center text-secondary">
                  Mint price <strong>0.08</strong>
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
                          You must be connected to MetaMask for minting a Tomoe
                          Gozen.
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
            {!loading && address && saleFlag === 0 && <PreSale />}
            {!loading && address && saleFlag > 0 && (
              <MintForm saleFlag={saleFlag} />
            )}
          </div>
          {address && (
            <div className="col-lg-4 col-12 pt-5 pb-5">
              <h3 className="title text-center">Mint informations</h3>
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
  return <WithTitleLayout title="Mint">{page}</WithTitleLayout>
}
