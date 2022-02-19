// whitelisted ips*
const ips = ['176.150.154.1', '185.205.108.171', '51.154.162.73']

export default async function isWhitelisted() {
  if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    return false
  } else {
    try {
      const response = await fetch(
        'https://ipgeolocation.abstractapi.com/v1/?api_key=ae2bf5bfc7d04416af8b84191357159b'
      )
      const data = await response.json()
      if (ips.includes(data.ip_address)) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
