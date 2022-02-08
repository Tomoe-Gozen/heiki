import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TheMenu from './the-menu'
import logoLight from '../public/images/logo/logo-white.png'
import TheMobileMenu from './the-mobile-menu'
import config from '../lib/config'
import ConnectWallet from './connect-wallet'
import MintForm from './mint-form'

export default function TheHeader() {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="container">
          <div className="header-inner d-flex">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <Link href="/">
                  <a className="logo-light">
                    <Image src={logoLight} alt="" />
                  </a>
                </Link>
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                  <ul className="mainmenu">
                    <TheMenu />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right">
              <div className="setting-option rn-icon-list  d-none d-md-block">
                <div className="icon-box">
                  <Link href={config.discord}>
                    <a target="_blank">
                      <i className="fab fa-discord"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="setting-option rn-icon-list  d-none d-md-block">
                <div className="icon-box">
                  <Link href={config.twitter}>
                    <a target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="setting-option header-btn  d-none d-md-block">
                <div className="icon-box">
                  <ConnectWallet />
                </div>
              </div>

              <div className="setting-option header-btn  d-none d-md-block">
                <MintForm />
              </div>

              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button className="hamberger-button" onClick={toggleActive}>
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <TheMobileMenu toggleActive={toggleActive} isActive={active} />
    </>
  )
}
