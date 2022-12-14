import Link from 'next/link'
import config from '../lib/config'

export default function TheFooter() {
  return (
    <>
      <div className="copy-right-one rn-section-gap ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>© Heiki, Inc. All rights reserved.</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <span className="pt-1">
                  Video made by The Vichitra Collective
                </span>
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
                    <Link href={config.discord}>
                      <a>Discord</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={config.twitter}>
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
      <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  )
}
