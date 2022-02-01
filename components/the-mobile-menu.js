import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TheMenu from './the-menu'
import logoLight from '../public/images/logo/logo-white.png'

export default function TheMobileMenu({
  toggleActive = () => {},
  isActive = false
}) {
  const mobileMenu = useRef(null)

  useEffect(() => {
    if (!isActive) return
    const handleClick = (event) => {
      if (mobileMenu.current && !mobileMenu.current.contains(event.target)) {
        toggleActive()
      }
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [isActive, toggleActive])

  return (
    <div className={`${isActive ? 'active' : ''} popup-mobile-menu`}>
      <div className="inner" ref={mobileMenu}>
        <div className="header-top">
          <div className="logo logo-custom-css">
            <Link href="/">
              <a className="logo-light" onClick={toggleActive}>
                <Image src={logoLight} alt="nft-logo" />
              </a>
            </Link>
          </div>
          <div className="close-menu">
            <button className="close-button" onClick={toggleActive}>
              <i className="feather-x"></i>
            </button>
          </div>
        </div>
        <nav>
          <ul className="mainmenu">
            <TheMenu isMobile={true} toggleActive={toggleActive} />
          </ul>
        </nav>
      </div>
    </div>
  )
}
