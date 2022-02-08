import Link from 'next/link'
import config from '../lib/config'

export default function TheMenu({ isMobile = false, toggleActive = () => {} }) {
  return (
    <>
      <li>
        <Link href="/#about">
          <a onClick={isMobile && toggleActive}>About</a>
        </Link>
      </li>
      <li>
        <Link href="/#roadmap">
          <a onClick={isMobile && toggleActive}>Roadmap</a>
        </Link>
      </li>
      <li>
        <Link href="/#team">
          <a onClick={isMobile && toggleActive}>Team</a>
        </Link>
      </li>
      <li>
        <Link href="/#faq">
          <a onClick={isMobile && toggleActive}>FAQ</a>
        </Link>
      </li>
      <li>
        <Link href="/mint">
          <a onClick={isMobile && toggleActive}>Mint</a>
        </Link>
      </li>
      {isMobile && (
        <>
          <li>
            <Link href={config.twitter}>
              <a onClick={isMobile && toggleActive}>Twitter</a>
            </Link>
          </li>
          <li>
            <Link href={config.discord}>
              <a onClick={isMobile && toggleActive}>Discord</a>
            </Link>
          </li>
          <li>
            <Link href="/connect-wallet">
              <a onClick={isMobile && toggleActive}>Connect Wallet</a>
            </Link>
          </li>
        </>
      )}
    </>
  )
}
