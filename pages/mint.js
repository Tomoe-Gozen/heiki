import Head from 'next/head'
import WithTitleLayout from '../components/layouts/with-title'
import MintForm from '../components/mint-form'
import MintInfo from '../components/mint-info'
import { useWeb3 } from '@3rdweb/hooks'
import Noty from 'noty'
import { useEffect, useState } from 'react'

export default function Mint() {
  const title = 'Tomoe Gozen NFT - Mint'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  const { address } = useWeb3()
  const [alreadyMinted, setAlreadyMinted] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [nMinted, setnMinted] = useState(0)
  const [saleFlag, setSaleFlag] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
              timeout: 3000
            }).show()
            setLoading(false)
          }
        } catch (error) {
          new Noty({
            type: 'error',
            text: error.message,
            layout: 'top',
            timeout: 3000
          }).show()
          setLoading(false)
        }
      }
      setLoading(false)
      return
    }

    mintInfo()
    /* let interval = setInterval(() => {
      mintInfo()
    }, 30000)

    return () => {
      clearInterval(interval)
    } */
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
      <div className="rn-upload-variant-area varient pb--100 min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mb-lg--0 mb--100 pt--120">
              <h3 className="title text-center">Mint a Tomoe Gozen</h3>
              <h4 className="text-center text-secondary">
                Mint price <strong>0.08</strong>
              </h4>
              {!loading ? (
                saleFlag === 0 ? (
                  'Presale (displayCountDown)'
                ) : (
                  <MintForm />
                )
              ) : (
                <h4 className="text-center mt--10">Loading...</h4>
              )}
            </div>
            <div className="col-lg-4 col-12 pt--50">
              <h3 className="title text-center">Mint informations</h3>
              <MintInfo
                alreadyMinted={alreadyMinted}
                saleFlag={saleFlag}
                loading={loading}
                maxSupply={maxSupply}
                nMinted={nMinted}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Mint.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Mint">{page}</WithTitleLayout>
}
