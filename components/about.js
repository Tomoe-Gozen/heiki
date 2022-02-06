export default function About() {
  return (
    <>
      <div className="rn-about-banner-area rn-section-gapTop anchor" id="about">
        <div className="container mb--30">
          <div className="row">
            <div className="col-12">
              <h3
                className="title sal-animate"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                About
              </h3>
            </div>
          </div>
        </div>
        <div className="container-fluid about-fluidimg ">
          <div className="row">
            <div className="img-wrapper">
              <div className="banner_image--1 bg_image"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="h--100">
                <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                  <div className="inner">
                    <h2
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Why we do this
                    </h2>
                    <p
                      className="about-disc"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      We are making a NFT collection about Tomoe Gozen because
                      this story is really exciting. It&apos;s shrouded in
                      mystery, but she was known for being both beautiful and
                      terrifying. What’s truly impressive about the legend of
                      Tomoe Gozen is not just that she was a female samurai, but
                      that she was an elite warrior!
                    </p>
                    <a
                      href="#roadmap"
                      className="btn btn-primary-alta btn-large sal-animate mt--20"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      See Our Roadmap
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rn-about-card transparent-bg">
                <div className="inner">
                  <h3
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    The Tomoe Gozen story
                  </h3>
                  <p
                    className="about-disc mb--0"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Tomoe Gozen (巴御前) was an onna-musha from the late Heian
                    period of Japanese history. She served Minamoto no Yoshinaka
                    during the Genpei War and was a part of the conflict that
                    led to the first shogunate. Her family had strong
                    affiliations with Yoshinaka.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rn-about-Quote-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5 d-flex align-items-center">
            <div className="col-lg-6">
              <div className="rn-about-title-wrapper">
                <h3
                  className="title"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="150"
                >
                  The Tale of Heike, which chronicles the Genpei War.
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="rn-about-wrapper"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
              >
                <p>
                  Her story in the Tale of the Heike influenced several
                  generations of samurai. Tomoe is often celebrated in books,
                  music, poems, films, historical novels and culture in general.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rn-statistick-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--30">
            <div className="col-12 text-center">
              <h3 className="mb-0">Tomoe Gozen </h3>
              <h4 className="font-tomoe h1">Statistics</h4>
            </div>
          </div>
          <div className="row g-5">
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="single-counter-up text-center">
                <div className="number counter-odomitter-active">8,000</div>
                <div className="botton-title">Tomoe Gozens</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-counter-up text-center">
                <div className="number counter-odomitter-active">6</div>
                <div className="botton-title">Team members</div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="single-counter-up text-center">
                <div className="number counter-odomitter-active">0.08</div>
                <div className="botton-title">Mint price in eth</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-counter-up text-center">
                <div className="number counter-odomitter-active up-plus">
                  15,000
                </div>
                <div className="botton-title">Community fans</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
