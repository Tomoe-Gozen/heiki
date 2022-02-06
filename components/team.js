import Image from 'next/image'
import Link from 'next/link'
import Profile1 from '../public/images/bg/bg-image-106.jpg'
import Profile2 from '../public/images/bg/bg-image-107.jpg'
import Profile3 from '../public/images/bg/bg-image-110.jpg'
import Profile4 from '../public/images/bg/bg-image-109.jpg'
import Profile5 from '../public/images/bg/bg-image-108.jpg'
import Profile6 from '../public/images/bg/bg-image-111.jpg'

export default function Team() {
  const profiles = [
    {
      id: 1,
      pseudo: 'Kyosuke Rogue',
      name: 'Pratama Arghi',
      src: Profile1,
      twitter: 'bangwest',
      instagram: 'pratamaarghi',
      title: 'Co-founder'
    },
    {
      id: 2,
      pseudo: "Sune'emon Torii",
      name: 'Jérémie Evéquoz',
      src: Profile2,
      twitter: 'jayzhvj_eth',
      instagram: 'jeremie_evequoz',
      linkedin: 'jérémie-evéquoz-7a4547134',
      title: 'Co-founder'
    },
    {
      id: 3,
      pseudo: 'Shiro Kujira',
      name: 'Jefri Yanto',
      src: Profile3,
      twitter: 'jef_YANTO',
      instagram: 'a73p',
      title: 'Co-founder'
    },
    {
      id: 4,
      pseudo: 'Ibaraki Tsukasa',
      name: 'Alexandre Le Corre',
      src: Profile4,
      twitter: 'el__reco',
      instagram: '_elreco',
      linkedin: 'alexandre-le-corre',
      title: 'Developer'
    },
    {
      id: 5,
      pseudo: 'Uesugi Kenshin',
      name: 'Davide Mendes',
      src: Profile5,
      twitter: 'dragorath_eth',
      linkedin: 'davide-mendes',
      title: 'Developer'
    },
    {
      id: 6,
      pseudo: 'Nephophiley',
      name: 'Tita Carella',
      src: Profile6,
      twitter: 'titacarella',
      title: 'Artist'
    }
  ]

  return (
    <div className="rn-authore-profile-area rn-section-gapTop anchor" id="team">
      <div className="container mb--30">
        <div className="row">
          <div className="col-12">
            <h3
              className="title sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Team
            </h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-5 d-flex" id="nav-home">
          {profiles.map((p) => (
            <div key={p.id} className="col-lg-4 col-md-6 col-12 p-10">
              <div className="product-style-one no-overlay d-flex flex-column justify-content-between mx-lg-7 mx-5">
                <div className="card-thumbnail">
                  <a>
                    <Image src={p.src} alt="" />
                  </a>
                </div>
                <div className="card-details">
                  <a>
                    <span className="product-name font-tomoe">{p.pseudo}</span>
                  </a>
                  <span className="latest-bid">{p.name}</span>
                  <div className="bid-react-area">
                    <div className="last-bid">{p.title}</div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  {p.twitter && (
                    <Link href={`https://twitter.com/${p.twitter}`}>
                      <a target="_blank" className="btn btn-tomoe btn-sm mx-2">
                        <i data-feather="twitter" width="18" height="18"></i>
                      </a>
                    </Link>
                  )}
                  {p.linkedin && (
                    <Link href={`https://linkedin.com/in/${p.linkedin}`}>
                      <a target="_blank" className="btn btn-tomoe btn-sm mx-2">
                        <i data-feather="linkedin" width="18" height="18"></i>
                      </a>
                    </Link>
                  )}
                  {p.instagram && (
                    <Link href={`https://instagram.com/${p.instagram}`}>
                      <a target="_blank" className="btn btn-tomoe btn-sm mx-2">
                        <i data-feather="instagram" width="18" height="18"></i>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
