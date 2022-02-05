import '../styles/vendor/bootstrap.min.css'
import '../styles/vendor/slick.css'
import '../styles/vendor/slick-theme.css'
import '../styles/vendor/nice-select.css'
import '../styles/plugins/feature.css'
import '../styles/plugins/jquery-ui.min.css'
import '../styles/style.css'
import '../styles/custom.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const initTheme = () => import('../lib/theme').then((init) => init.default())

  useEffect(() => {
    initTheme()
    const handleRouteChange = (url) => {
      initTheme()
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
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
