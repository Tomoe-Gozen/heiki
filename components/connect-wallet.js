import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import Noty from 'noty'

export default function ConnectWallet() {
  const { address, connectWallet, chainId } = useWeb3()

  const ellipsisString = (str) => {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length)
  }

  useEffect(() => {
    const wallet = localStorage.getItem('wallet')
      ? JSON.parse(localStorage.getItem('wallet'))
      : null
    if (address && chainId) {
      if (!wallet) {
        localStorage.setItem(
          'wallet',
          JSON.stringify({
            address,
            chainId
          })
        )
      } else if (wallet.address != address || wallet.chainId != chainId) {
        localStorage.setItem(
          'wallet',
          JSON.stringify({
            address,
            chainId
          })
        )
      }
    } else if (wallet) {
      localStorage.removeItem('wallet')
    }
  }, [address, chainId])

  const clickConnectWallet = async () => {
    await connectWallet('injected')

    if (chainId !== 3) {
      new Noty({
        type: 'warning',
        text: 'You are connected with the Ropsten network',
        layout: 'top',
        timeout: 3000
      }).show()
    } else {
      new Noty({
        type: 'success',
        text: 'Your wallet is connected via MetaMask',
        layout: 'top',
        timeout: 3000
      }).show()
    }
  }

  return !address ? (
    <button
      className="btn btn-primary-alta btn-small"
      onClick={clickConnectWallet}
    >
      Connect Wallet
    </button>
  ) : (
    <button className="btn btn-success btn-small">
      Connected ({ellipsisString(address)})
    </button>
  )
}
