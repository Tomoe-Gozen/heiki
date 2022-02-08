import Link from 'next/link'
import config from '../lib/config'
import { useWeb3 } from '@3rdweb/hooks'

export default function TheMenu({ isMobile = false, toggleActive = () => {} }) {
  const { address, connectWallet } = useWeb3()

  const ellipsisString = (str) => {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length)
  }

  const clickConnectWallet = () => {
    if (isMobile) {
      toggleActive()
    }
    connectWallet('injected')
  }

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
            {!address ? (
              <button
                className="btn btn-primary-alta btn-small mt-3"
                onClick={clickConnectWallet}
              >
                Connect Wallet
              </button>
            ) : (
              <button className="btn btn-success btn-small mt-3">
                Connected ({ellipsisString(address)})
              </button>
            )}
          </li>
        </>
      )}
    </>
  )
}
