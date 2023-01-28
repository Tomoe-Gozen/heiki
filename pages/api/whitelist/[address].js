import config from '../../../config.json'

const userHandler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).end('Only GET requests allowed')
    return
  }

  const { address } = req.query
  try {
    const response = await fetch(`${config.s3}/wl.json`)
    const whitelists = await response.json()
    res.status(200).json({
      whitelisted: whitelists.some((w) => w === address)
    })
    return
  } catch (e) {
    res.status(500).end('Someting went wrong')
    return
  }
}

export default userHandler
