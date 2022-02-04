import Image from 'next/image'
import Link from 'next/link'
import Profile1 from '../public/images/bg/bg-image-100.jpg'
import Profile2 from '../public/images/bg/bg-image-101.jpg'
import Profile3 from '../public/images/bg/bg-image-102.jpg'
import Profile4 from '../public/images/bg/bg-image-103.jpg'
import Profile5 from '../public/images/bg/bg-image-104.jpg'
import Profile6 from '../public/images/bg/bg-image-105.jpg'

export default function Team() {
  const profiles = [
    {
      id: 1,
      pseudo: 'Kyosuke Rogue',
      name: 'Pratama Arghi',
      src: Profile1,
      twitter: 'bangwest',
      instagram: 'pratamaarghi',
      title: 'Co-founder',
      job: 'CS student'
    },
    {
      id: 2,
      pseudo: "Sune'emon Torii",
      name: 'Jérémie Evequoz',
      src: Profile2,
      twitter: 'jayzhvj_eth',
      instagram: 'jeremie_evequoz',
      title: 'Co-founder',
      job: 'CS'
    },
    {
      id: 3,
      pseudo: 'Shiro Kujira',
      name: 'Jefri Yanto',
      src: Profile3,
      twitter: 'jef_YANTO',
      instagram: 'a73p',
      title: 'Co-founder',
      job: 'Administrator'
    },
    {
      id: 4,
      pseudo: 'Ibaraki Tsukasa',
      name: 'Alexandre Le Corre',
      src: Profile4,
      twitter: 'el__reco',
      instagram: '_elreco',
      linkedin: 'alexandre-le-corre',
      title: 'Co-founder',
      job: 'Developer'
    },
    {
      id: 5,
      pseudo: 'Uesugi Kenshin',
      name: 'Davide Mendes',
      src: Profile5,
      twitter: 'dragorath_eth',
      linkedin: 'davide-mendes',
      title: 'Co-founder',
      job: 'Developer'
    },
    {
      id: 6,
      pseudo: 'Nephophiley',
      name: 'Tita Carella',
      src: Profile6,
      twitter: 'titacarella',
      title: 'Artist',
      job: 'Designer'
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
            <div key={p.id} className="col-lg-4 col-12 p-10">
              <div className="product-style-one no-overlay d-flex flex-column justify-content-between">
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
                    <div className="last-bid">{p.title}</div>{' '}
                    <div className="last-bid">{p.job}</div>
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
