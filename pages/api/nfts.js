import metadata from '../../public/_metadata.json'

const pageSize = 84
const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end('Only POST requests allowed')
    return
  }

  const body = JSON.parse(req.body)
  const attributes = body.attributes
  let newData = []
  metadata.forEach((d) => {
    let displayAll = true
    attributes.forEach((attribute) => {
      if (attribute.values.find((element) => element.isActive)) {
        displayAll = false
      }
    })
    if (displayAll) {
      newData.push(d)
    } else {
      d.attributes.forEach((attribute) => {
        const findAttribute = attributes.find(
          (element) => element.name === attribute.trait_type
        )
        if (findAttribute) {
          const findValues = findAttribute.values.filter(
            (element) => element.isActive
          )
          findValues.forEach((value) => {
            let existingData = newData.findIndex(
              (element) => element?.edition === d.edition
            )
            if (value.name === attribute.value && existingData === -1) {
              newData.push(d)
            }
          })
        }
      })
    }
  })
  const total = newData.length
  const totalPages = Math.ceil(newData.length / pageSize)
  res
    .status(200)
    .json({
      data: paginate(newData, pageSize, req.query.page ?? 1),
      total,
      totalPages
    })
  return
}
