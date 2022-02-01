import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TheMenu from './the-menu'
import logoLight from '../public/images/logo/logo-white.png'
import TheMobileMenu from './the-mobile-menu'

export default function TheHeader() {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <>
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
                    <TheMenu />
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right mb-sm-0 mb-4">
              <div className="setting-option header-btn">
                <div className="icon-box">
                  <a className="btn btn-primary-alta btn-small">
                    Connect Wallet
                  </a>
                </div>
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
