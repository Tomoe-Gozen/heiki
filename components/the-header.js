import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TheMenu from './the-menu'
import logoLight from '../public/images/logo/logo-white.png'
import TheMobileMenu from './the-mobile-menu'
import config from '../config.json'
import ConnectWallet from './connect-wallet'

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
              {config.opensea && (
                <div className="setting-option rn-icon-list  d-none d-md-block">
                  <div className="icon-box">
                    <Link href={config.opensea}>
                      <a target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12s12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081l3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528c-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199a.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962c-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132c-.026.226.017.459.125.67c.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992c.156-.274.308-.566.43-.86c.024-.052.043-.107.065-.16c.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787c0-.108-.004-.221-.014-.327c-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312a6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972a5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197a4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05l.192.054l.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202a.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017c.034.024.084.062.147.11c.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691c.065.074.127.146.192.226c.062.079.132.156.19.232c.079.104.16.212.235.324c.033.053.074.108.105.161c.096.142.178.288.257.435c.034.067.067.141.096.213c.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254c-.075.17-.161.343-.264.502c-.034.06-.075.122-.113.182c-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209c-.081.098-.16.19-.245.278c-.048.058-.1.118-.156.17c-.052.06-.108.113-.156.161c-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298c.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              )}
              {config.discord && (
                <div className="setting-option rn-icon-list  d-none d-md-block">
                  <div className="icon-box">
                    <Link href={config.discord}>
                      <a target="_blank">
                        <i className="fab fa-discord"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              )}
              {config.twitter && (
                <div className="setting-option rn-icon-list  d-none d-md-block">
                  <div className="icon-box">
                    <Link href={config.twitter}>
                      <a target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              )}
              <div className="setting-option header-btn  d-none d-md-block">
                <div className="icon-box">
                  <ConnectWallet />
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
