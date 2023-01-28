import Head from 'next/head'
import WithTitleLayout from '../components/layouts/with-title'
import PrivacyPolicyText from '../components/privacy-policy-text'
import config from '../config.json'

export default function PrivacyPolicy() {
  const title = `${config.appName} - Privacy Policy`
  const description = config.appDescription
  const image = '/images/og-image.png'

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
      <div className="terms-condition-area rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="offset-lg-2 col-lg-8">
              <div className="condition-wrapper">
                <PrivacyPolicyText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

PrivacyPolicy.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Privacy Policy">{page}</WithTitleLayout>
}
