import Slider from './slider'

export default function HeroSection() {
  return (
    <div className="banner-style-4 rn-section-gapTop">
      <div className="container">
        <div className="row row-reverce-sm align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mt_sm--50">
            <h2
              className="title"
              data-sal-delay="200"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              <span className="text-xlg font-tomoe mb-0">
                <span className="text-tomoe">T</span>omoe{' '}
                <span className="text-tomoe">G</span>ozen
              </span>{' '}
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
                Roadmap
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
          <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
}
