import config from '../../lib/config'

const setAttributesValues = (mdata, metadata) => {
  let names = []
  metadata.forEach((m) => {
    const name = m.attributes.find(
      (element) => element.trait_type === mdata.name
    )
    if (name?.value) {
      const check = names.find((n) => n.name === name.value)

      if (!check) {
        names.push({
          name: name.value,
          count: 1
        })
      } else {
        check.count += 1
      }
    }
  })

  const array = names.map((n) => {
    return {
      name: n.name,
      count: n.count,
      isActive: mdata.isActive ? true : false
    }
  })

  return array.sort((a, b) => {
    if (a.count > b.count) return -1
    if (a.count < b.count) return 1
    return 0
  })
}

export default async function handler(req, res) {
  const body = req.body ? JSON.parse(req.body) : null

  let data = []
  const response = await fetch(`${config.s3}/_metadata.json`)
  const metadata = await response.json()

  metadata.forEach((meta) => {
    meta.attributes.forEach((m) => {
      if (!data.find((d) => d.name === m.trait_type)) {
        data.push({
          name: m.trait_type,
          values: []
        })
      }
    })
  })

  data = data.map((d) => {
    return {
      ...d,
      values: setAttributesValues(d, metadata)
    }
  })

  if (req.query?.attribute && req.query?.value) {
    const attributeName = req.query.attribute
    const valueName = req.query.value
    data = body.attributes.map((a) => {
      if (a.name === attributeName) {
        return {
          ...a,
          values: a.values.map((v) => {
            return {
              ...v,
              isActive: v.name === valueName ? !v.isActive : v.isActive
            }
          })
        }
      } else {
        return a
      }
    })
  }

  res.status(200).json(data)
  return
}
