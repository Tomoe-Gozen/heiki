import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react'
import { useEffect, useState } from 'react'

export default function ConnectWallet({ withoutLoading = false }) {
  const address = useAddress()
  const disconnect = useDisconnect()
  const connectWithMetamask = useMetamask()
  const [loading, setLoading] = useState(true)
  const [isWeb3, setIsWeb3] = useState(true)

  const ellipsisString = (str) => {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length)
  }

  useEffect(() => {
    window.addEventListener('load', function () {
      if (typeof web3 === 'undefined') {
        setIsWeb3(false)
      }
    })
    let timer = setTimeout(
      () => {
        setLoading(false)
      },
      withoutLoading ? 0 : 1000
    )
    return () => {
      clearTimeout(timer)
    }
  })

  const clickConnectWallet = async () => {
    if (!isWeb3) {
      window.location.href = 'https://metamask.io/download/'
    } else {
      await connectWithMetamask()
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
    <button onClick={disconnect} className="btn btn-success btn-small">
      Connected ({ellipsisString(address)})
    </button>
  )
}
