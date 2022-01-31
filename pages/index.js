import Head from 'next/head'
import HeroSection from '../components/hero-section'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tomoe Gozen NFT</title>
      </Head>
      <HeroSection />
      <About />
    </>
  )
}
