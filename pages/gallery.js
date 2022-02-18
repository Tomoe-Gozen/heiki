import Head from 'next/head'
import { useEffect, useState } from 'react'
import WithTitleLayout from '../components/layouts/with-title'
import metadata from '../public/_metadata.json'

export default function Gallery() {
  const title = 'Tomoe Gozen NFT - Gallery'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  // metadata = metadata.slice(0, 12)

  const [attributes, setAttributes] = useState([])
  const [data, setData] = useState(metadata)

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
    filterData()
  }

  const filterData = () => {
    // console.log(data)
    // console.log(attributes)
    // setData(data => {
    //   return data.filter((d) => {
    //     d.attributes.forEach((a) => {
    //       if (a.trait_type === a)
    //     })
    //     if (d.attribute)
    //     const findAttribute = attributes.find(a => a.name === )
    //     if (a.name === attributeName) {
    //       return {
    //         name: a.name,
    //         values: a.values.map((v) => {
    //           if (v.name === valueName) {
    //             return {
    //               name: v.name,
    //               isActive: !v.isActive
    //             }
    //           } else {
    //             return v
    //           }
    //         })
    //       }
    //     } else {
    //       return a
    //     }
    //   })
    // })
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

    return names.map((n) => {
      return {
        name: n.name,
        count: n.count,
        isActive: false
      }
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
          <div className="col-md-3 d-none d-md-block">
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
            <i>TODO: List of NFTs with Images and pagination</i>
            {/* {data.map((d, index) => (
              <ul key={index}>
                <li>
                  {d.name}
                </li>
              </ul>
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

Gallery.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Gallery">{page}</WithTitleLayout>
}
