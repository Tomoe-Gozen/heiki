import contract from '../../../lib/contract'

const userHandler = async (req, res) => {
  const { isWhitelisted } = contract()

  if (req.method !== 'GET') {
    res.status(405).end('Only GET requests allowed')
    return
  }

  const { address } = req.query
  try {
    const whitelist = await isWhitelisted(address)

    res.status(200).json({
      whitelisted: whitelist.valid
    })
    return
  } catch (e) {
    res.status(500).end('Someting went wrong')
    return
  }
}

export default userHandler
