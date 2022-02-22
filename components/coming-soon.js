import config from '../lib/config'
import Link from 'next/link'

export default function ComingSoon() {
  return (
    <div className="maintanence-area">
      <div className="wrapper">
        <div className="row row--0">
          <div className="col-lg-4">
            <div className="inner">
              <div className="d-flex flex-column justify-content-center content h-100 text-center">
                <span className="sub-title">The gallery is</span>
                <h3 className="title text-center">
                  <span className="text-tomoe font-tomoe">Coming Soon</span>
                </h3>

                <p className="text-center mb-5 mb-lg-0">
                  <span className="pb-3 d-block">
                    The gallery will be available{' '}
                    <span className="text-theme">after the public sale.</span>
                  </span>
                  <span className="font-tomoe mt-4 mb-0 d-block">Twitter</span>
                  <a href={config.twitter}>twitter.com/NFTTomoeGozen</a>
                  <span className="font-tomoe mt-4 mb-0 d-block">Discord</span>
                  <a href={config.discord}>discord.gg/tomoegozen</a>
                </p>
                <div className="d-flex flex-row justify-content-center mt--50">
                  <Link href="/mint">
                    <a className="btn btn-large btn-primary-alta cursor-pointer mr--20">
                      Mint
                    </a>
                  </Link>
                  <Link href="/#faq">
                    <a className="btn btn-large btn-primary-alta cursor-pointer">
                      FAQ
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="position-relative banner-one-slick comeing-soon-slick  slider-style-4 slick-arrow-style-one rn-slick-dot-style">
              <div className="single-rn-slider">
                <video autoPlay muted loop id="myVideo">
                  <source src="/videos/promotion.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
