import Link from 'next/link'
import config from '../lib/config'
import ConnectWallet from './connect-wallet'
import { useRouter } from 'next/router'

export default function TheMenu({ isMobile = false, toggleActive = () => {} }) {
  const router = useRouter()

  const handleToggleActive = () => {
    if (isMobile) {
      toggleActive()
    }
  }

  return (
    <>
      <li className="has-droupdown has-menu-child-item">
        <Link href="/home">
          <a
            className={router.pathname === '/home' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            Home
          </a>
        </Link>
        <ul className="submenu">
          <li>
            <Link href="/home#about">
              <a
                className={router.asPath === '/home#about' ? 'text-theme' : ''}
                onClick={handleToggleActive}
              >
                About <i className="feather-home"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home#roadmap">
              <a
                className={
                  router.asPath === '/home#roadmap' ? 'text-theme' : ''
                }
                onClick={handleToggleActive}
              >
                Roadmap <i className="feather-home"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home#team">
              <a
                className={router.asPath === '/home#team' ? 'text-theme' : ''}
                onClick={handleToggleActive}
              >
                Team <i className="feather-home"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home#faq">
              <a
                className={router.asPath === '/home#faq' ? 'text-theme' : ''}
                onClick={handleToggleActive}
              >
                FAQ <i className="feather-home"></i>
              </a>
            </Link>
          </li>
        </ul>
      </li>
      {/* <li>
        <Link href="/#roadmap">
          <a
            className={router.asPath === '/#roadmap' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            Roadmap
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a
            className={router.asPath === '/#team' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            Team
          </a>
        </Link>
      </li>
      <li>
        <Link href="/#faq">
          <a
            className={router.asPath === '/#faq' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            FAQ
          </a>
        </Link>
      </li> */}
      <li>
        <Link href="/gallery">
          <a
            className={router.pathname === '/gallery' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            Gallery
          </a>
        </Link>
      </li>
      <li>
        <a
          href={config.opensea}
          target="_blank"
          rel="noreferrer"
          onClick={handleToggleActive}
        >
          OpenSea
        </a>
      </li>
      <li>
        <Link href="/">
          <a
            className={router.pathname === '/' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            Mint
          </a>
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
