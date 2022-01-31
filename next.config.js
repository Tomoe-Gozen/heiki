module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    )
    return config
  }
}
