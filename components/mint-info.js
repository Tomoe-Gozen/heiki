import { useWeb3 } from '@3rdweb/hooks'
import Noty from 'noty'
import { useCallback, useEffect, useState } from 'react'

export default function MintInfo() {
  const { address } = useWeb3()
  const [alreadyMinted, setAlreadyMinted] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [nMinted, setnMinted] = useState(0)
  const [saleFlag, setSaleFlag] = useState(0)
  const [loading, setLoading] = useState(true)

  const displayMinted = () => {
    if (saleFlag === 0) {
      return
    } else if (saleFlag === 1) {
      return `${nMinted} / 2`
    } else {
      return nMinted
    }
  }

  useEffect(() => {
    const mintInfo = async () => {
      if (address) {
        try {
          const res = await fetch('/api/mint-info', {
            body: JSON.stringify({
              address
            }),
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'localhost'
            },
            method: 'POST'
          })

          if (res.ok) {
            const { alreadyMinted, maxSupply, nMinted, saleFlag } =
              await res.json()
            setAlreadyMinted(alreadyMinted)
            setMaxSupply(maxSupply)
            setnMinted(nMinted)
            setSaleFlag(saleFlag)
            setLoading(false)
          } else {
            const { error } = await res.json()
            new Noty({
              type: res.status >= 500 ? 'error' : 'warning',
              text: error,
              layout: 'top',
              timeout: 3000
            }).show()
            setLoading(false)
          }
        } catch (error) {
          new Noty({
            type: 'error',
            text: error.message,
            layout: 'top',
            timeout: 3000
          }).show()
          setLoading(false)
        }
      }
    }

    mintInfo()
    let interval = setInterval(() => {
      mintInfo()
    }, 30000)

    return () => {
      clearInterval(interval)
    }
  }, [address])

  return (
    <div className="container">
      <div className="single-counter-up text-center mb--20">
        <div className="number">
          {!loading ? (
            displayMinted()
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title">You minted</div>
        {!loading && saleFlag == 2 && '(5 per transactions)'}
      </div>
      <div className="single-counter-up text-center mt--20 mb--20">
        <div className="number">
          {!loading ? (
            maxSupply
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title">Max supply</div>
      </div>
      <div className="single-counter-up text-center">
        <div className="number">
          {!loading ? (
            alreadyMinted
          ) : (
            <i className="fa fa-solid fa-circle-notch fa-spin"></i>
          )}
        </div>
        <div className="botton-title">Total minted</div>
      </div>
    </div>
  )
}
