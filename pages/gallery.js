import Head from 'next/head'
import { useEffect, useState } from 'react'
import WithTitleLayout from '../components/layouts/with-title'
import NftCard from '../components/nft-card'
import NftModal from '../components/nft-modal'
import config from '../config.json'

export default function Gallery(props) {
  const title = `${config.appName} - Gallery`
  const description = config.appDescription
  const image = '/images/og-image.png'

  const [attributes, setAttributes] = useState(props.attributes)
  const [selectedAttributes, setSelectedAttributes] = useState([])
  const [nfts, setNfts] = useState(props.nfts.data)
  const [count, setCount] = useState(8000)
  const [pagination, setPagination] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedNft, setSelectedNft] = useState(null)

  const selectAttribute = async (attribute, value) => {
    const res = await fetch(
      `${props.baseUrl}/api/attributes?${new URLSearchParams({
        attribute,
        value
      })}`,
      { method: 'POST', body: JSON.stringify({ attributes }) }
    )
    const data = await res.json()
    setAttributes(data)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const changePage = async (page) => {
    const res = await fetch(
      `${props.baseUrl}/api/nfts?${new URLSearchParams({
        page
      })}`,
      { method: 'POST', body: JSON.stringify({ attributes }) }
    )
    const data = await res.json()
    setNfts(data.data)
    setCount(data.total)
    const paginationArray = Array.from(
      new Array(data.totalPages),
      (x, i) => i + 1
    )
    setPagination(
      paginationArray.slice(
        page - 4 >= 1 ? page - 4 : 0,
        page + 4 > data.totalPages ? data.totalPages : page + 4
      )
    )
    setCurrentPage(page)
    scrollToTop()
  }

  useEffect(() => {
    setAttributes(props.attributes)
  }, [props.attributes])

  useEffect(() => {
    const fetchNfts = async () => {
      setIsLoading(true)
      const res = await fetch(`${props.baseUrl}/api/nfts`, {
        method: 'POST',
        body: JSON.stringify({ attributes })
      })
      const data = await res.json()
      setNfts(data.data)
      setCount(data.total)
      const paginationArray = Array.from(
        new Array(data.totalPages),
        (x, i) => i + 1
      )
      setPagination(paginationArray.slice(0, 7))
      setCurrentPage(1)
      setIsLoading(false)
    }
    fetchNfts()

    setSelectedAttributes(() => {
      let activatedAttributes = []
      attributes.forEach((attribute) => {
        attribute.values.forEach((element) => {
          if (element.isActive) {
            activatedAttributes.push({
              name: attribute.name,
              value: element.name
            })
          }
        })
      })
      return activatedAttributes
    })
  }, [attributes, props.baseUrl])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={config.appUrl} />
        <meta property="og:site_name" content={config.appName} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="p-3">
        <div className="row">
          <div className="col-md-3 d-none d-lg-block">
            <div className="tab-wrapper-one">
              {attributes.map((a, index) => (
                <div key={index}>
                  <h6 className="mt--10 mb--10 title">{a.name}</h6>
                  <nav className="tab-button-one">
                    <div className="nav nav-tabs justify-content-center max-height-nav">
                      {a.values.map((v, index2) => (
                        <div key={index2}>
                          <button
                            onClick={() => selectAttribute(a.name, v.name)}
                            className={`nav-link ${v.isActive ? 'active' : ''}`}
                          >
                            <strong>{v.name}</strong> <br />
                            {v.count}
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
            <h6 className="mt--10 mb--10 title">
              Collection <span className="text-theme">{count}</span>
            </h6>
            {selectedAttributes.length > 0 && (
              <div className="rn-pd-sm-property-wrapper mx-lg-7 mx-5 my-2">
                <div className="property-wrapper">
                  {selectedAttributes.map((attr, index) => (
                    <div
                      key={index}
                      className="pd-property-inner"
                      onClick={() => selectAttribute(attr.name, attr.value)}
                    >
                      <span className="color-body type">{attr.name}</span>
                      <span className="color-white value">{attr.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="row">
              {nfts.map((n, index) => (
                <div key={index} className="col-xxl-3 col-md-4 col-12 mb--20">
                  <NftCard
                    isLoading={isLoading}
                    name={`#${n.name.split('#')[1]}`}
                    nft={n}
                    setSelectedNft={setSelectedNft}
                    image={`${config.s3}/${n.name.split('#')[1]}.png`}
                  />
                </div>
              ))}
            </div>
            <nav
              className="pagination-wrapper"
              aria-label="Page navigation example"
            >
              <ul className="pagination single-column-blog">
                {pagination.map((page) => (
                  <li key={page} className="page-item">
                    <a
                      style={{ cursor: 'pointer' }}
                      className={`${
                        currentPage === page ? 'active' : ''
                      } page-link`}
                      onClick={() => changePage(page)}
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <NftModal setSelectedNft={setSelectedNft} selectedNft={selectedNft} />
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const resAttributes = await fetch(`${baseUrl}/api/attributes`)

  const attributes = await resAttributes.json()

  const resNfts = await fetch(`${baseUrl}/api/nfts`, {
    method: 'POST',
    body: JSON.stringify({ attributes })
  })
  const nfts = await resNfts.json()

  return { props: { attributes, nfts, baseUrl } }
}

Gallery.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Gallery">{page}</WithTitleLayout>
}
