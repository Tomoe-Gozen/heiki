import { useWeb3 } from '@3rdweb/hooks'
import { useEffect, useState } from 'react'

export default function ConnectWallet({ withoutLoading = false }) {
  const { address, connectWallet, chainId } = useWeb3()
  const [loading, setLoading] = useState(true)
  const [isWeb3, setIsWeb3] = useState(true)

  const ellipsisString = (str) => {
    return str.substr(0, 5) + '...' + str.substr(str.length - 5, str.length)
  }

  useEffect(() => {
    const disableLoading = () => {
      setTimeout(
        () => {
          setLoading(false)
        },
        withoutLoading ? 0 : 1000
      )
    }
    window.addEventListener('load', function () {
      if (typeof web3 === 'undefined') {
        setIsWeb3(false)
      }
    })
    disableLoading()
  })

  const clickConnectWallet = async () => {
    if (!isWeb3) {
      window.location.href = 'https://metamask.io/download/'
    } else {
      await connectWallet('injected')
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
