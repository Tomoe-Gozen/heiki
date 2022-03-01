module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/mint',
        destination: '/',
        permanent: true
      }
    ]
  }
}
