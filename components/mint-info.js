import { useWeb3 } from '@3rdweb/hooks'
import Noty from 'noty'
import { useCallback, useEffect, useState } from 'react'

export default function MintInfo() {
  const { address } = useWeb3()
  const [totalSupply, setTotalSupply] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)
  const [balance, setBalance] = useState(0)

  const mintInfo = useCallback(async () => {
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
          const { totalSupply, maxSupply, balance } = await res.json()
          setTotalSupply(totalSupply)
          setMaxSupply(maxSupply)
          setBalance(balance)
        } else {
          const { error } = await res.json()
          new Noty({
            type: res.status >= 500 ? 'error' : 'warning',
            text: error,
            layout: 'top',
            timeout: 3000
          }).show()
        }
      } catch (error) {
        new Noty({
          type: 'error',
          text: error.message,
          layout: 'top',
          timeout: 3000
        }).show()
      }
    }
  }, [address])

  useEffect(() => {
    mintInfo()
      // make sure to catch any error
      .catch(console.error)
  }, [address, mintInfo])

  return (
    <div className="banner-style-4 rn-section-gapTop">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1 mt_md--40 mt_sm--40">
            <h2
              className="title"
              data-sal-delay="200"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Your mint information
            </h2>
            <p
              className="slide-disc"
              data-sal-delay="300"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Total supply: {maxSupply}
            </p>
            <p
              className="slide-disc"
              data-sal-delay="300"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              You have minted {balance} Tomoe Gozen NFT from {totalSupply}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
