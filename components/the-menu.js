import Link from 'next/link'
import config from '../lib/config'
import ConnectWallet from './connect-wallet'
import { useRouter } from 'next/router'

export default function TheMenu({ isMobile = false, toggleActive = () => {} }) {
  const router = useRouter()
  console.log(router)
  const handleToggleActive = () => {
    if (isMobile) {
      toggleActive()
    }
  }

  return (
    <>
      <li>
        <Link href="/#about">
          <a
            className={router.asPath === '/#about' ? 'text-theme' : ''}
            onClick={handleToggleActive}
          >
            About
          </a>
        </Link>
      </li>
      <li>
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
      </li>
      <li>
        <Link href="/mint">
          <a
            className={router.pathname === '/mint' ? 'text-theme' : ''}
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
