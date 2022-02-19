const pageSize = 10
const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

const gallery = async (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.status(405).end('Only POST requests allowed')
      return
    }

    res.status(200).json()
    return
  } catch (error) {
    res.status(500).json({ error: 'Someting went wrong' })
    return
  }
}

export default gallery
