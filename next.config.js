module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['tomoegozen.ams3.cdn.digitaloceanspaces.com']
  },
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
