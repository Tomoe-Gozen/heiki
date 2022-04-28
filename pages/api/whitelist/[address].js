import isWhiteListed from '../lib/isWhiteListed'

const userHandler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).end('Only GET requests allowed')
    return
  }

  const { address } = req.query
  try {
    const response = await fetch(
      'https://tomoegozen.ams3.digitaloceanspaces.com/wl.json'
    )
    const data = await response.json()

    res
      .status(200)
      .json({
        whitelisted: data.some((d) => d.toLowerCase() === address.toLowerCase())
      })
    return
  } catch (e) {
    res.status(500).end('Someting went wrong')
    return
  }
}

export default userHandler
