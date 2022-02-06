import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TheMenu from './the-menu'
import logoLight from '../public/images/logo/logo-white.png'
import TheMobileMenu from './the-mobile-menu'
import { useWeb3 } from '@3rdweb/hooks'

export default function TheHeader() {
  const [active, setActive] = useState(false)
  const { address, connectWallet } = useWeb3()

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
            <div className="header-right mb-sm-0 mb-4">
              <div className="setting-option header-btn">
                <div className="icon-box">
                  {!address && (
                    <button
                      className="btn btn-primary-alta btn-small"
                      onClick={() => connectWallet('injected')}
                    >
                      Connect Wallet
                    </button>
                  )}
                  {address && (
                    <button className="btn btn-primary-alta btn-small">
                      Wallet Connected
                    </button>
                  )}
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
