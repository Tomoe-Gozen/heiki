import Link from 'next/link'

export default function TheFooter() {
  return (
    <>
      <div className="copy-right-one rn-section-gap ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>© Tomoe Gozen, Inc. All rights reserved.</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <ul className="privacy">
                  <li>
                    <Link href="/terms">
                      <a>Terms</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.gg/tomoegozen">
                      <a>Discord</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/NFTTomoeGozen">
                      <a>Twitter</a>
                    </Link>
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
