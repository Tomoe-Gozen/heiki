export default function TheFooter() {
  return (
    <>
      <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="widget-content-wrapper">
                <div className="footer-left">
                  <div className="logo-thumbnail logo-custom-css"></div>
                  <p className="rn-footer-describe">
                    Created with the collaboration of over 60 of the worlds best
                    Tomoe Gozen Artists.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
              <div className="footer-widget widget-quicklink">
                <h6 className="widget-title">Tomoe Gozen</h6>
                <ul className="footer-list-one">
                  <li className="single-list">
                    <a href="#">Protocol Explore</a>
                  </li>
                  <li className="single-list">
                    <a href="#">System Token</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Otimize Time</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Visual Checking</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Fadeup System</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Activity Log</a>
                  </li>
                  <li className="single-list">
                    <a href="#">System Auto Since</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget widget-information">
                <h6 className="widget-title">Information</h6>
                <ul className="footer-list-one">
                  <li className="single-list">
                    <a href="#">Market Explore</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Ready Token</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Main Option</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Product Checking</a>
                  </li>
                  <li className="single-list">
                    <a href="blog.html">Blog Grid</a>
                  </li>
                  <li className="single-list">
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="single-list">
                    <a href="#">Fix Bug </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget">
                <h6 className="widget-title">Recent Sold Out</h6>
                <ul className="footer-recent-post">
                  <li className="recent-post">
                    <div className="thumbnail">
                      <a href="product-details.html">
                        <img
                          src="assets/images/portfolio/portfolio-02.jpg"
                          alt="Product Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <a href="product-details.html">Diamond Dog</a>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.022wETH</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>© Tomoe Gozen, Inc. All rights reserved.</span>
                <ul className="privacy">
                  <li>
                    <a href="terms-condition.html">Terms</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <ul className="social-copyright">
                  <li>
                    <a href="#">
                      <i data-feather="facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i data-feather="twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i data-feather="instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i data-feather="linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i data-feather="mail"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  )
}
