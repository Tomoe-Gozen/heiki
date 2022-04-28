import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Profile1 from '../public/images/team/arghi.jpg'
import Profile2 from '../public/images/team/jeremie.jpg'
import Profile3 from '../public/images/team/jeffry.jpg'
import Profile4 from '../public/images/team/alex.jpg'
import Profile5 from '../public/images/team/davide.jpg'
import Profile6 from '../public/images/team/tita.jpg'
import TeamModal from './team-modal'

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)

  const members = [
    {
      id: 1,
      pseudo: 'Kyosuke Rogue',
      name: 'Arghi Pratama',
      src: Profile1,
      twitter: 'bangwest06',
      instagram: 'pratamaarghi',
      title: 'Co-founder',
      description: (
        <>
          <p>
            My name is Arghi Pratama and I&apos;m 26 years old. I am originally
            from Indonesia but I have been living in Queenstown, New Zealand
            since 2015.
          </p>
          <p>
            I met @Sune&apos;emon Torii in 2015 when we were studying together
            and we have been become a really good friend. He is my mentor and he
            taught me about crypto !! I have been investing in crypto since 2018
            and NFT since July in 2021 last year. 📊
          </p>
          <p>
            I met @Shiro Kujira in 2020 and we become close friend too, we both
            love nature so much which is the reason I love hiking. Mostly during
            our day off, we spend the day hiking to see nature and beautiful
            scenery in South Island, New Zealand. 🏔️
          </p>
          <p>
            Besides that, I am continuing my study computer science field since
            2021.
          </p>
        </>
      )
    },
    {
      id: 2,
      pseudo: "Sune'emon Torii",
      name: 'Jeremie Evequoz',
      src: Profile2,
      twitter: 'jayzhvj_eth',
      instagram: 'jeremie_evequoz',
      linkedin: 'jérémie-evéquoz-7a4547134',
      title: 'Co-founder',
      description: (
        <>
          <p>
            My name is Jérémie ! I&apos;m 28 years old and I&apos;m from Sion,
            Switzerland
          </p>

          <p>
            I&apos;ve been working in computer sciences for about 10 years,
            mostly system and network oriented and also been working with
            @Uesugi Kenshin for the last 3 years. I&apos;ve been familiar with
            crypto since 2016 (I was not as involved as I am now).
          </p>

          <p>
            In 2015 I spent a year abroad in Queenstown, New Zealand and
            that&apos;s where I met @Kyosuke Rogue. By the way the best burgers
            ever are in QT without any doubt. 🍔
          </p>

          <p>
            Since I live in the middle of the Alps I&apos;ve been skiing a lot
            since my very young age. I participated to a lot of competition and
            then started to train younger ones. ⛷️ It&apos;s in 2014 that I met
            @Ibaraki Tsukasa since then it&apos;s been a pretty close friend and
            a not so bad gaming partner 🎮
          </p>
        </>
      )
    },
    {
      id: 3,
      pseudo: 'Ibaraki Tsukasa',
      name: 'Alexandre Le Corre',
      src: Profile4,
      instagram: '_elreco',
      linkedin: 'alexandre-le-corre',
      title: 'Developer',
      description: (
        <>
          <p>
            I&apos;m Alexandre and I&apos;m 28 years old. I work as a lead
            developer in a Parisian start-up. 💻
          </p>

          <p>
            In my work I always value the human rather than the technical
            skills.
          </p>
          <p> For me, a good atmosphere at work is essential. 🧑‍🤝‍🧑</p>
          <p>I really like working from home. 🏠</p>

          <p>
            I love racket sports like table tennis, tennis, badminton. 🎾 By the
            way I pay a McDo to anyone who beats me at Tennis.
          </p>
        </>
      )
    },
    {
      id: 4,
      pseudo: 'Uesugi Kenshin',
      name: 'Davide Mendes',
      src: Profile5,
      twitter: 'dragorath_eth',
      linkedin: 'davide-mendes',
      title: 'Developer',
      description: (
        <>
          <p>Hello everyone!</p>

          <p>
            My name is Davide ! I&apos;m from Portugal and I live in
            Switzerland.
          </p>
          <p>
            I&apos;m a computer engineer who loves to be on the edge with new
            technologies 💻, that so the blockchain interests me.
          </p>

          <p>I like to stay in movement and to be human. 🤟🏼</p>
        </>
      )
    },
    {
      id: 5,
      pseudo: 'Nephophiley',
      name: 'Tita Carella',
      src: Profile6,
      twitter: 'titacarella',
      title: 'Artist',
      description: (
        <>
          <p>
            My name is Tita and I&apos;m a 21 years old computer science
            engineering student since 2018. 💻
          </p>
          <p>
            I live in Bekasi, Indonesia. I started to draw at 7 and like to
            explore many art genres. basically I like to learn many things
            beside drawing. 👩‍🎨
          </p>

          <p>
            I&apos;m still new with NFT but it got my interest and seems fun to
            me.
          </p>

          <p>
            I usually play games and watch some movies or anime when
            there&apos;s nothing do.
          </p>
        </>
      )
    }
  ]

  return (
    <div className="rn-authore-profile-area rn-section-gapTop anchor" id="team">
      <TeamModal
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
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
        <div className="row g-6 d-flex justify-content-center" id="nav-home">
          {members.map((m) => (
            <div key={m.id} className="col-xxl-4 col-lg-6 col-md-6 col-12">
              <div className="product-style-one no-overlay d-flex flex-column justify-content-between mx-special">
                <div className="card-thumbnail">
                  <a
                    className="cursor-pointer"
                    onClick={() => setSelectedMember(m)}
                  >
                    <Image src={m.src} alt="" />
                  </a>
                </div>
                <div className="card-details">
                  <a
                    className="cursor-pointer"
                    onClick={() => setSelectedMember(m)}
                  >
                    <span className="product-name font-tomoe">{m.pseudo}</span>
                  </a>
                  <span className="latest-bid">{m.name}</span>
                  <div className="bid-react-area">
                    <div className="last-bid">{m.title}</div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                  {m.twitter && (
                    <Link href={`https://twitter.com/${m.twitter}`}>
                      <a target="_blank" className="btn btn-tomoe btn-sm mx-2">
                        <i data-feather="twitter" width="18" height="18"></i>
                      </a>
                    </Link>
                  )}
                  {m.linkedin && (
                    <Link href={`https://linkedin.com/in/${m.linkedin}`}>
                      <a target="_blank" className="btn btn-tomoe btn-sm mx-2">
                        <i data-feather="linkedin" width="18" height="18"></i>
                      </a>
                    </Link>
                  )}
                  {m.instagram && (
                    <Link href={`https://instagram.com/${m.instagram}`}>
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
