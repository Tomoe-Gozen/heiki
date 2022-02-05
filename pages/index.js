import Head from 'next/head'
import HeroSection from '../components/hero-section'
import About from '../components/about'
import DefaultLayout from '../components/layouts/default'
import Roadmap from '../components/roadmap'
import Team from '../components/team'
import Faq from '../components/faq'

export default function Index() {
  const title = 'Tomoe Gozen NFT'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://tomoegozen.io" />
        <meta property="og:site_name" content="Tomoe Gozen" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@TomoeGozenNFTs" />
        <meta name="twitter:creator" content="@TomoeGozenNFTs" />
      </Head>
      <HeroSection />
      <About />
      <Roadmap />
      <Team />
      <Faq />
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>
}
