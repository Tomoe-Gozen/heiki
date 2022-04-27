import { useEffect } from 'react'

export default function Premint() {
  useEffect(() => {
    window.location.replace('https://www.premint.xyz/heiki-wl-registration')
  })

  return <div className="p-5">Redirecting to Premint...</div>
}
