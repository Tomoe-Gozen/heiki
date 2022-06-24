import Link from 'next/link'
import config from '../lib/config'

export default function Soon() {
  return (
    <div className="container-fluid soon-container">
      <div className="row">
        <div className="col-lg-12 p-0">
          <div
            className="banner_image--1 bg_image bg-image-border"
            data-black-overlay="7"
          >
            <div className="row">
              <div className="col-lg-12">
                <div className="call-to-action-wrapper">
                  <h3
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                    className="sal-animate font-tomoe text-xl"
                  >
                    We will launch soon!
                  </h3>
                  <p
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                    className="sal-animate"
                  >
                    Stay tuned and come back later, we plan to launch in{' '}
                    <strong className="text-tomoe">June</strong>! <br />
                    You will be able to connect your wallet and mint.
                    <br /> You can get more information on our{' '}
                    <Link href={config.discord}>
                      <a>Discord</a>
                    </Link>{' '}
                    and our{' '}
                    <Link href={config.twitter}>
                      <a>Twitter</a>
                    </Link>
                    .{' '}
                  </p>
                  <div
                    className="callto-action-btn-wrapper sal-animate"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    <Link href="/#roadmap">
                      <a className="btn btn-primary btn-large">Roadmap</a>
                    </Link>
                    <Link href="/#faq">
                      <a className="btn btn-primary-alta btn-large">FAQ</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
