const pageSize = 10
const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

export default function handler(req, res) {
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
      let isDeleted = false
      d.attributes.forEach((attribute) => {
        const findAttribute = attributes.find(
          (element) => element.name === attribute.trait_type
        )
        if (findAttribute) {
          const findValues = findAttribute.values.filter(
            (element) => element.isActive
          )
          findValues.forEach((value) => {
            if (!isDeleted) {
              let existingData = newData.length
                ? newData.findIndex((element) => element?.edition === d.edition)
                : -1
              if (value.name === attribute.value && existingData === -1) {
                newData.push(d)
              }
            }
            let existingData2 = newData.length
              ? newData.findIndex((element) => element?.edition === d.edition)
              : -1
            if (value.name !== attribute.value) {
              if (existingData2 !== -1) {
                delete newData[existingData2]
              }
              isDeleted = true
            }
          })
        }
      })
    }
  })
  res.status(200).json(paginate(newData, pageSize, 1))
  return
}
