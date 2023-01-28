import Link from 'next/link'
import Slider from './slider'
import config from '../config.json'

export default function HeroSection() {
  return (
    <div className="banner-style-4 rn-section-gapTop">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40">
            <h2
              className="title"
              data-sal-delay="200"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <span className="text-xlg font-tomoe mb-0">
                <span className="text-tomoe">{config.appName}</span>{' '}
              </span>{' '}
              <br /> Discover an amazing NFT collection.
            </h2>
            <p
              className="slide-disc"
              data-sal-delay="300"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              3333 female warriors picked up their weapons to fight for this
              world.
            </p>
            <div className="button-group">
              <Link href="/#roadmap">
                <a
                  className="btn btn-large btn-primary cursor-pointer"
                  data-sal-delay="500"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  Roadmap
                </a>
              </Link>
              <Link href="/mint">
                <a
                  className="btn btn-large btn-primary-alta cursor-pointer"
                  data-sal-delay="500"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  Mint
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 px-5 col-lg-6 col-md-12 order-1 order-lg-2">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
}
