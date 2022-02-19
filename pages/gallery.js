import Head from 'next/head'
import { useEffect, useState } from 'react'
import WithTitleLayout from '../components/layouts/with-title'
import NftCard from '../components/NftCard'
import metadata from '../public/_metadata.json'

export default function Gallery() {
  const title = 'Tomoe Gozen NFT - Gallery'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  const [attributes, setAttributes] = useState([])
  const [data, setData] = useState([])

  const selectAttribute = (attributeName, valueName) => {
    setAttributes((attributes) => {
      return attributes.map((a) => {
        if (a.name === attributeName) {
          return {
            ...a,
            values: a.values.map((v) => {
              if (v.name === valueName) {
                return {
                  ...v,
                  isActive: !v.isActive
                }
              } else {
                return v
              }
            })
          }
        } else {
          return a
        }
      })
    })
  }

  const filterData = () => {
    if (attributes) {
      setData(() => {
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
                      ? newData.findIndex(
                          (element) => element?.edition === d.edition
                        )
                      : -1
                    if (value.name === attribute.value && existingData === -1) {
                      newData.push(d)
                    }
                  }
                  let existingData2 = newData.length
                    ? newData.findIndex(
                        (element) => element?.edition === d.edition
                      )
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
        return paginate(newData, pageSize, 1)
      })
    }
  }

  const setAttributesValues = (mdata) => {
    let names = []
    metadata.forEach((m) => {
      const name = m.attributes.find(
        (element) => element.trait_type === mdata.trait_type
      )
      if (name && name.value) {
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
        isActive: false
      }
    })

    return array.sort((a, b) => {
      // Compare the 2 dates
      if (a.count > b.count) return -1
      if (a.count < b.count) return 1
      return 0
    })
  }

  useEffect(() => {
    setAttributes(
      metadata[0].attributes.map((m) => {
        return {
          name: m.trait_type,
          values: setAttributesValues(m)
        }
      })
    )
  }, [setAttributes])

  useEffect(() => {
    filterData()
  }, [attributes])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://www.tomoegozen.io" />
        <meta property="og:site_name" content="Tomoe Gozen" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@TomoeGozenNFTs" />
        <meta name="twitter:creator" content="@TomoeGozenNFTs" />
      </Head>
      <div className="p-3">
        <div className="row">
          <div className="col-md-3 d-none d-lg-block">
            <div className="tab-wrapper-one">
              {attributes.map((a, index) => (
                <div key={index}>
                  <h6 className="mt--10 mb--10 title">{a.name}</h6>
                  <nav className="tab-button-one">
                    <div className="nav nav-tabs justify-content-center">
                      {a.values.map((v, index2) => (
                        <div key={index2}>
                          <button
                            onClick={() => selectAttribute(a.name, v.name)}
                            className={`nav-link ${v.isActive ? 'active' : ''}`}
                          >
                            {v.name} ({v.count})
                          </button>
                        </div>
                      ))}
                    </div>
                  </nav>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-9 text-center">
            <h6 className="mt--10 mb--10 title">Collection</h6>
            <div className="row">
              {data.map((d, index) => (
                <div key={index} className="col-md-3 mb--20">
                  <NftCard
                    name={`#${d.edition}`}
                    image={`https://tomoegozen.ams3.cdn.digitaloceanspaces.com/${d.edition}.png`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Gallery.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Gallery">{page}</WithTitleLayout>
}
