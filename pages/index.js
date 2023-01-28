import Head from 'next/head'
import HeroSection from '../components/hero-section'
import About from '../components/about'
import DefaultLayout from '../components/layouts/default'
import Roadmap from '../components/roadmap'
import Team from '../components/team'
import Faq from '../components/faq'
import config from '../config.json'

export default function Index() {
  const title = config.appName
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
