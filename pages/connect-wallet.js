import Head from 'next/head'
import Soon from '../components/soon'
import WithTitleLayout from '../components/layouts/with-title'
import config from '../config.json'

export default function ConnectWallet() {
  const title = `${config.appName} - Connect Wallet`
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
      <Soon />
    </>
  )
}

ConnectWallet.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Connect Wallet">{page}</WithTitleLayout>
}
