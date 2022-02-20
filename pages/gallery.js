import Head from 'next/head'
import { useEffect, useState } from 'react'
import WithTitleLayout from '../components/layouts/with-title'
import NftCard from '../components/nft-card'

export default function Gallery(props) {
  const title = 'Tomoe Gozen NFT - Gallery'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  const [attributes, setAttributes] = useState(props.attributes)
  const [nfts, setNfts] = useState(props.nfts.data)
  const [count, setCount] = useState(8000)
  const [pagination, setPagination] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

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
    }
    fetchNfts()
  }, [attributes, props.baseUrl])

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
              Collection <i className="text-primary">{count}</i>
            </h6>
            <div className="row">
              {nfts.map((n, index) => (
                <div key={index} className="col-md-3 mb--20">
                  <NftCard
                    name={`#${n.edition}`}
                    image={`https://tomoegozen.ams3.cdn.digitaloceanspaces.com/${n.edition}.png`}
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
    </>
  )
}

export async function getStaticProps({ req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''

  const resAttributes = await fetch(`${baseUrl}/api/attributes`, {
    method: 'POST'
  })
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
