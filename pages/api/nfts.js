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

  let displayAll = true
  attributes.forEach((attribute) => {
    if (attribute.values.find((element) => element.isActive)) {
      displayAll = false
    }
  })

  if (displayAll) {
    newData = metadata
  } else {
    // search for activated attributes
    let activatedAttributes = []
    attributes.forEach((attribute) => {
      let newObject = {}
      let filteredValues = attribute.values.filter(
        (element) => element.isActive
      )
      newObject = {
        name: attribute.name,
        values: []
      }

      filteredValues.forEach((item) => {
        newObject.values.push(item.name)
      })
      activatedAttributes.push(newObject)
    })

    // ========
    console.log(activatedAttributes)
    var final = metadata
    for (const filter of activatedAttributes) {
      if (filter.values.length === 0) continue
      final = final.filter((nft) => {
        for (const attr of nft.attributes) {
          if (
            attr.trait_type === filter.name &&
            filter.values.includes(attr.value)
          ) {
            return true
          }
        }
      })
    }
    newData = final
  }

  const total = newData.length
  const totalPages = Math.ceil(newData.length / pageSize)
  newData = newData.sort((a, b) => parseInt(a.edition) - parseInt(b.edition))
  res.status(200).json({
    data: paginate(newData, pageSize, req.query.page ?? 1),
    total,
    totalPages
  })
  return
}
