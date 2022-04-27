import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Premint = () => {
  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    window.location.replace(`https://www.premint.xyz/heiki-x-${slug}`)
  })
  return <div className="p-5">Redirecting to Premint...</div>
}

export default Premint
