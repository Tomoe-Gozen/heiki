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

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}

export default MyApp
