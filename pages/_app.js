import '../styles/vendor/bootstrap.min.css'
import '../styles/vendor/slick.css'
import '../styles/vendor/slick-theme.css'
import '../styles/vendor/nice-select.css'
import '../styles/plugins/feature.css'
import '../styles/plugins/jquery-ui.min.css'
import '../styles/style.css'
import '../styles/custom.css'
import Script from 'next/script'
import DefaultLayout from '../components/layouts/default'
import Head from 'next/head'

import sal from 'sal.js'
sal()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="/js/main.js"
        strategy="afterInteractive"
        onLoad={() => console.log(`main script loaded correctly`)}
      />
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
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default MyApp
