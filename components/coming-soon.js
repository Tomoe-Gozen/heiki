import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoLight from '../public/images/logo/logo-white.png'
import config from '../lib/config'

export default function ComingSoon() {
  const [imageNumber, setImageNumber] = useState(2)

  useEffect(() => {
    let interval = setInterval(() => {
      setImageNumber((number) => (number === 4 ? 2 : number + 1))
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  let images = []
  for (var i = 2; i <= 4; i++) {
    images.push(
      <div
        key={i}
        className={`position-absolute top-0 start-0 w-100 single-rn-slider bg_image--${i} bg_image ${
          i === imageNumber ? 'visible' : 'invisible'
        }`}
      ></div>
    )
  }

  return (
    <div className="maintanence-area">
      <div className="wrapper">
        <div className="row row--0">
          <div className="col-lg-4">
            <div className="inner">
              <div className="content h-100">
                <span className="sub-title">The Gallery</span>
                <h3 className="title">
                  <span className="text-tomoe font-tomoe">Coming Soon</span>
                </h3>

                <p className="text-center mb-5 mb-lg-0">
                  <span className="pb-3 d-block">
                    The gallery will be available after the public sale.
                  </span>
                  <span className="font-tomoe mt-4 mb-0 d-block">OpenSea</span>
                  <a href={config.opensea}>discord.gg/tomoegozen</a>
                  <span className="font-tomoe mt-4 mb-0 d-block">Twitter</span>
                  <a href={config.twitter}>twitter.com/NFTTomoeGozen</a>
                  <span className="font-tomoe mt-4 mb-0 d-block">Discord</span>
                  <a href={config.discord}>discord.gg/tomoegozen</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="position-relative banner-one-slick comeing-soon-slick  slider-style-4 slick-activation-09 slick-arrow-style-one rn-slick-dot-style">
              {images}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
