import Head from 'next/head'
import Soon from '../components/soon'
import WithTitleLayout from '../components/layouts/with-title'

export default function ConnectWallet() {
  // title
  const title = 'Heiki NFT - Connect Wallet'
  const description =
    '3333 female warriors picked up their weapons to fight for this world.'
  const image = '/images/og-image.png'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://www.heikinft.com" />
        <meta property="og:site_name" content="Heiki" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@HeikiNFT" />
        <meta name="twitter:creator" content="@HeikiNFT" />
      </Head>
      <Soon />
    </>
  )
}

ConnectWallet.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Connect Wallet">{page}</WithTitleLayout>
}
