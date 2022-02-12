import '../styles/vendor/bootstrap.min.css'
import '../styles/vendor/slick.css'
import '../styles/vendor/slick-theme.css'
import '../styles/vendor/nice-select.css'
import '../styles/plugins/feature.css'
import '../styles/plugins/jquery-ui.min.css'
import '../styles/style.css'
import '../styles/custom.css'
import '../styles/plugins/noty.css'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const initTheme = () => import('../lib/theme').then((init) => init.default())

  const handleAnchor = (timeOut = 0) => {
    // scroll to anchor fix https://github.com/vercel/next.js/issues/11109#issuecomment-844443085
    const path = window.location.hash
    if (path && path.includes('#')) {
      window.scrollTo(0, 0)
      const id = path.replace('#', '')
      if (id) {
        setTimeout(() => {
          document
            .querySelector('#' + id)
            .scrollIntoView({ behavior: 'smooth' })
        }, timeOut)
      }
    }
  }

  // 1 - ethereum MainNet, 3 - Ropsten, 4- Rinkeby, 1337 - localhost:8545
  const supportedChainIds = [1, 3, 4, 1337]

  // injected - metamask
  const connectors = {
    injected: {}
  }

  useEffect(() => {
    initTheme()
    handleAnchor(1000)

    const handleRouteChange = (url) => {
      initTheme()
      handleAnchor(100)
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
        ga.pageview(url)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script src="https://kit.fontawesome.com/6dc39c7558.js" />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="all" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <ThirdwebWeb3Provider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        {getLayout(<Component {...pageProps} />)}
      </ThirdwebWeb3Provider>
    </>
  )
}

export default MyApp
