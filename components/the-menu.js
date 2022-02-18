import Link from 'next/link'
import config from '../lib/config'
import ConnectWallet from './connect-wallet'

export default function TheMenu({ isMobile = false, toggleActive = () => {} }) {
  const handleToggleActive = () => {
    if (isMobile) {
      toggleActive()
    }
  }

  return (
    <>
      <li className="has-droupdown has-menu-child-item">
        <Link href="/">
          <a onClick={handleToggleActive}>Home</a>
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/#roadmap">
              <a onClick={handleToggleActive}>
                Roadmap <i className="feather-home"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#team">
              <a onClick={handleToggleActive}>
                Team <i className="feather-home"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#faq">
              <a onClick={handleToggleActive}>
                FAQ <i className="feather-home"></i>
              </a>
            </Link>
          </li>
        </ul>
      </li>
      {/* <li>
        <Link href="/#roadmap">
          <a onClick={handleToggleActive}>Roadmap</a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a onClick={handleToggleActive}>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/#faq">
          <a onClick={handleToggleActive}>FAQ</a>
        </Link>
      </li> */}
      <li>
        <Link href="/gallery">
          <a onClick={handleToggleActive}>Gallery</a>
        </Link>
      </li>
      <li>
        <Link href="/mint">
          <a onClick={handleToggleActive}>Mint</a>
        </Link>
      </li>
      {isMobile && (
        <>
          <li>
            <Link href={config.twitter}>
              <a onClick={handleToggleActive}>Twitter</a>
            </Link>
          </li>
          <li>
            <Link href={config.discord}>
              <a onClick={handleToggleActive}>Discord</a>
            </Link>
          </li>
          <li>
            <div className="text-center mt-3">
              <ConnectWallet onClick={handleToggleActive} />
            </div>
          </li>
        </>
      )}
    </>
  )
}
