import { useWeb3 } from '@3rdweb/hooks'
import { useEffect, useState } from 'react'
import Noty from 'noty'

export default function ConnectWallet() {
  const { address, connectWallet, chainId } = useWeb3()
  const [loading, setLoading] = useState(true)

  const ellipsisString = (str) => {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length)
  }

  const disableLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
    disableLoading()
  }, [address, chainId])

  const clickConnectWallet = async () => {
    await connectWallet('injected')

    if (chainId !== 1 && process.env.NEXT_PUBLIC_IS_PRODUCTION) {
      new Noty({
        type: 'warning',
        text: 'You are not connected to the Ethereum Mainnet',
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
      disabled={loading}
      onClick={clickConnectWallet}
    >
      {!loading ? (
        'Connect Wallet'
      ) : (
        <>
          <i className="fa fa-solid fa-circle-notch fa-spin mr--10"></i> Loading
        </>
      )}
    </button>
  ) : (
    <button className="btn btn-success btn-small">
      Connected ({ellipsisString(address)})
    </button>
  )
}
