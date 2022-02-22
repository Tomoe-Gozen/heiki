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
      let filteredValues = attribute.values.filter(
        (element) => element.isActive
      )
      filteredValues.forEach((value) => {
        activatedAttributes.push({
          trait_type: attribute.name,
          value: value.name
        })
      })
    })
    // end search of activated attributes

    // add nfts for the activated attributes
    let prevAttribute = null
    console.log(activatedAttributes)
    let firstLoop = false
    activatedAttributes.forEach((attribute) => {
      if (prevAttribute && prevAttribute.trait_type !== attribute.trait_type) {
        firstLoop = true
        console.log(firstLoop)
        newData.forEach((d, index) => {
          if (
            d.attributes.find(
              (element) =>
                element.trait_type === attribute.trait_type &&
                element.value !== attribute.value
            )
          ) {
            newData.splice(index, 1)
          }
        })
      } else if (!firstLoop) {
        console.log(firstLoop)
        metadata.forEach((d) => {
          d.attributes
            .filter(
              (element) =>
                element.trait_type === attribute.trait_type &&
                element.value === attribute.value
            )
            ?.forEach(() => {
              let existingData = newData.findIndex(
                (element) => element.edition === d.edition
              )
              if (existingData === -1) {
                newData.push(d)
              }
            })
        })
      }
      prevAttribute = attribute
    })
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
