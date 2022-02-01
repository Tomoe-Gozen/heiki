import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoLight from '../public/images/logo/logo-white.png'

export default function ComingSoon() {
  const [imageNumber, setImageNumber] = useState(2)

  useEffect(() => {
    let interval = setInterval(() => {
      setImageNumber((number) => (number === 7 ? 2 : number + 1))
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  let images = []
  for (var i = 2; i <= 7; i++) {
    images.push(
      <div
        key={i}
        className={`position-absolute top-0 start-0 w-100 h-100 single-rn-slider bg_image--${i} bg_image ${
          i === imageNumber ? 'visible' : 'invisible'
        }`}
      ></div>
    )
  }

  return (
    <div className="maintanence-area">
      <div className="wrapper">
        <div className="row row--0">
          <div className="col-lg-4 col-md-4">
            <div className="inner">
              <div className="logo logo-custom-css">
                <Link href="/">
                  <a className="logo-light">
                    <Image src={logoLight} alt="" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <span className="sub-title">Stay Tuned</span>
                <h3 className="title">
                  <span className="text-tomoe font-tomoe">Coming Soon</span>
                </h3>

                <p className="text-center">
                  <p className="pb-3">
                    We are available please connect with us via
                  </p>
                  <p className="font-tomoe mt-4 mb-0">Twitter</p>
                  <a href="https://twitter.com/TomoeGozenNFTs">
                    twitter.com/TomoeGozenNFTs
                  </a>
                  <p className="font-tomoe mt-4 mb-0">Discord</p>
                  <a href="https://discord.gg/tomoegozen">
                    discord.gg/tomoegozen
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="position-relative w-100 h-100 banner-one-slick comeing-soon-slick  slider-style-4 slick-activation-09 slick-arrow-style-one rn-slick-dot-style">
              {images}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
