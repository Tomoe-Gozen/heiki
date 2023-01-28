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
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import config from '../config.json'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const initTheme = () => import('../lib/theme').then((init) => init.default())

  const handleAnchor = (timeOut = 0) => {
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

  useEffect(() => {
    initTheme()
    handleAnchor(1500)

    const handleRouteChange = (url) => {
      initTheme()
      handleAnchor(100)
      if (config.googleAnalyticsId) {
        ga.pageview(url)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, pageProps])

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
      <ThirdwebProvider
        desiredChainId={config.isProduction ? ChainId.Mainnet : ChainId.Goerli}
      >
        {getLayout(<Component {...pageProps} />)}
      </ThirdwebProvider>
    </>
  )
}

export default MyApp
