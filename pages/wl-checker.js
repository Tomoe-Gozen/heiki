import { useAddress } from '@thirdweb-dev/react'
import Lottie from 'lottie-react'
import Head from 'next/head'
import Noty from 'noty'
import { useEffect, useState } from 'react'
import ConnectWallet from '../components/connect-wallet'
import WithTitleLayout from '../components/layouts/with-title'
import config from '../config.json'
import checkLottie from '../public/lottie/check.json'
import yogaLottie from '../public/lottie/yoga.json'

export default function Mint() {
  const title = `${config.appName} - Whitelist Checker`
  const description = config.appDescription
  const image = '/images/og-image.png'

  const address = useAddress()
  const [isWhitelisted, setIsWhitelisted] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const checkWl = async () => {
      setLoading(false)
      if (address) {
        try {
          const res = await fetch(`${config.apiUrl}/api/whitelist/${address}`)
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
          console.log(error.message)
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
    }, 1000)
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
        <meta property="og:url" content={config.appUrl} />
        <meta property="og:site_name" content={config.appName} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
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
                  for {config.appName}?
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
                          whitelisted for mint.
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

            {!loading && address && (
              <div className="row justify-content-center my-5">
                <div className="col-12 col-lg-8">
                  <div className="single-counter-up p-0 text-center py-2">
                    <div className="d-flex gap-5 justify-content-center align-items-center">
                      <Lottie
                        style={{ height: 300 }}
                        loop="true"
                        className="d-none d-md-block"
                        animationData={isWhitelisted ? checkLottie : yogaLottie}
                      />
                      <div className="w-50">
                        <h1
                          className={`font-tomoe ${
                            isWhitelisted ? 'text-success' : 'text-danger'
                          }`}
                        >
                          {isWhitelisted ? 'Congratulations!' : 'Sorry!'}
                        </h1>
                        <h4>
                          {isWhitelisted
                            ? 'You are whitelisted'
                            : 'You are not whitelisted yet'}
                        </h4>
                        {config.discord && (
                          <p>
                            Join our{' '}
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={config.discord}
                            >
                              Discord <i className="fab fa-discord"></i>
                            </a>{' '}
                            to get more informations
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

Mint.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Whitelist Checker">{page}</WithTitleLayout>
}
