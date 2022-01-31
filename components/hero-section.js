import Image from 'next/image'
import Slider1 from '../public/images/slider/slider-1.jpg'

export default function HeroSection() {
  return (
    <div className="slider-one rn-section-gapTop">
      <div className="container">
        <div className="row row-reverce-sm align-items-center">
          <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
            <h2
              className="title"
              data-sal-delay="200"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <strong className="text-xlg font-special">
                <span className="text-theme">T</span>omoe{' '}
                <span className="text-theme">G</span>ozen
              </strong>{' '}
              <br /> Discover an amazing NFT collection.
            </h2>
            <p
              className="slide-disc"
              data-sal-delay="300"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              8000 female warriors inspired by Tale of Heike and the legendary
              tale of a woman named Tomoe Gozen.
            </p>
            <div className="button-group">
              <a
                className="btn btn-large btn-primary cursor-pointer"
                href="#"
                data-sal-delay="400"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Check Raffle
              </a>
              <a
                className="btn btn-large btn-primary-alta cursor-pointer"
                href="create.html"
                data-sal-delay="500"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Mint
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
            <div className="slider-thumbnail">
              <Image src={Slider1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
