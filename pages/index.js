import Head from 'next/head'
import HeroSection from '../components/hero-section'
import About from '../components/about'
import ComingSoon from '../components/coming-soon'
import MinimalLayout from '../components/layouts/minimal'

export default function Index() {
  return (
    <>
      <Head>
        <title>Tomoe Gozen NFT</title>
      </Head>
      {/* <HeroSection />
      <About /> */}
      <ComingSoon />
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return <MinimalLayout>{page}</MinimalLayout>
}
