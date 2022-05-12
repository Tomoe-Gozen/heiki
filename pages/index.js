import Head from 'next/head'
import HeroSection from '../components/hero-section'
import About from '../components/about'
import DefaultLayout from '../components/layouts/default'
import Roadmap from '../components/roadmap'
import Team from '../components/team'
import Faq from '../components/faq'
import Faction from '../components/faction'

export default function Index() {
  const title = 'Heiki NFT'
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
      <HeroSection />
      <About />
      <Roadmap />
      <Team />
      <Faction />
      <Faq />
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
