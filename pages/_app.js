import '../styles/vendor/bootstrap.min.css'
import '../styles/vendor/slick.css'
import '../styles/vendor/slick-theme.css'
import '../styles/vendor/nice-select.css'
import '../styles/plugins/feature.css'
import '../styles/plugins/jquery-ui.min.css'
import '../styles/style.css'

import DefaultLayout from '../components/layouts/default'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
