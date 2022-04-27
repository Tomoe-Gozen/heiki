module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/premint',
        destination: 'https://www.premint.xyz/heiki-wl-registration'
      },
      {
        source: '/premint/:slug',
        destination: 'https://www.premint.xyz/heiki-x-:slug'
      }
    ]
  }
}
