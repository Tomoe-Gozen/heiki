import isWhiteListed from '../lib/isWhiteListed'

const userHandler = async (req, res) => {
  try {
    if (req.method !== 'GET') {
      res.status(405).end('Only GET requests allowed')
      return
    }

    const { address } = req.query
    const whitelist = await isWhiteListed(address)

    res.status(200).json({ whitelisted: whitelist.valid })
    return
  } catch (error) {
    res.status(500).end('Someting went wrong')
    return
  }
}

export default userHandler
