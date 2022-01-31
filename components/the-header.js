import Image from 'next/image'
import Link from 'next/link'
import logoLight from '../public/images/logo/logo-white.png'

export default function TheHeader() {
  return (
    <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
      <div className="container">
        <div className="header-inner">
          <div className="header-left">
            <div className="logo-thumbnail logo-custom-css">
              <Link href="/">
                <a className="logo-light">
                  <Image src={logoLight} alt="nft-logo" />
                </a>
              </Link>
            </div>
            <div className="mainmenu-wrapper">
              <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                  <li>
                    <Link href="/#about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#roadmap">
                      <a>Roadmap</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#team">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#mint">
                      <a>Mint</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="header-right">
            <div className="setting-option header-btn">
              <div className="icon-box">
                <a className="btn btn-primary-alta btn-small">Connect Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
