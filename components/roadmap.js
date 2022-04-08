import Image from 'next/image'
import Icon1 from '../public/images/icons/icon-1.png'
import Icon2 from '../public/images/icons/icon-2.png'
import Icon3 from '../public/images/icons/icon-3.png'
import Icon4 from '../public/images/icons/icon-4.png'
import Icon5 from '../public/images/icons/icon-5.png'
import Icon6 from '../public/images/icons/icon-6.png'

export default function Roadmap() {
  const roadmapSteps = [
    {
      id: 1,
      title: 'Our mission',
      src: Icon1,
      description: (
        <>
          <p>
            <strong className="text-tomoe">Absolute power</strong> With broken
            timelines happening in the 11th century, the great battle is about
            to begin. A mass of people, fuelled by greed, annihilated humanity,
            and obtained power, great enough to establish the new order.
          </p>
          <p>
            Our mission is to release{' '}
            <strong className="text-tomoe">3333</strong> female warriors with
            around 300 unique traits.{' '}
            <strong className="text-tomoe">Heiki</strong> is not just PFP NFT,
            it is also a brand and to become a major brand to exist in the
            digital/NFT space and lifestyle industries.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: 'Community',
      src: Icon2,
      description: (
        <p>
          Our focus is to <strong className="text-tomoe">connect people</strong>{' '}
          together in web3 and we believe that community play an important role
          in the success of the NFT project. When you join our community, your
          voice matters, and you will be able to vote based on the number of
          tokens you hold. The intent has always been to connect the community
          and build the community focuses which connect us with inspiring
          individuals. You have the word of the team that we will continue to
          build and create for the community, but we do not promise any future
          value of the NFT.
        </p>
      )
    },
    {
      id: 3,
      title: 'Branding',
      src: Icon3,
      description: (
        <p>
          Heiki will have their own brand apparel and the first{' '}
          <strong className="text-tomoe">333 minters</strong> will get a
          high-quality tee collection for free (Shipping included)
        </p>
      )
    },
    {
      id: 4,
      title: 'Transparency',
      src: Icon4,
      description: (
        <p>
          We will allocate <strong className="text-tomoe">25%</strong> of the
          minted to Community wallet which will be known as the “Heiki
          Treasure”. Additionally,{' '}
          <strong className="text-tomoe">30% of all Gen 1</strong> secondary
          markets will go towards Heiki Treasure. Heiki Treasure will be used to
          fund projects detailed on the roadmap.
        </p>
      )
    },
    {
      id: 5,
      title: 'Staking system',
      src: Icon5,
      description: (
        <p>
          Throughout Japan’s history, Samurai were paid by their feudal lords,
          the Daimyo, in rice or land. We want to reward our holders by
          implementing staking system. We will launch a utility token and
          holders will be able to stake their Heiki avatars to claim{' '}
          <strong className="text-tomoe">$Rice</strong> token which can be used
          to claim <strong className="text-tomoe">3D version NFT</strong>,
          Hoodies, Tees, including{' '}
          <strong className="text-tomoe">Gen 2 release</strong> can be paid
          partially with our tokens, more utilities will come in roadmap 2.0.
        </p>
      )
    },
    {
      id: 6,
      title: 'Manga',
      src: Icon6,
      description: (
        <p>
          Our team has been working on developing{' '}
          <strong className="text-tomoe">the Heiki concept</strong> and story.
          We will release our manga series and all female warrior characters in
          the manga will be in the Heiki collection. For the first chapter, we
          will pick characters based on voting systems or through a community
          raffle and the raffle winner will have their characters used for our
          first chapter manga series.
        </p>
      )
    }
  ]

  return (
    <>
      <div className="rn-service-area rn-section-gapTop anchor" id="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-12 mb--50">
              <h3
                className="title"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Roadmap
              </h3>
            </div>
          </div>
          <div className="row g-5">
            {roadmapSteps.map((r) => (
              <div key={r.id} className="col-lg-4 col-12">
                <div
                  data-sal="slide-up"
                  data-sal-delay="150"
                  data-sal-duration="800"
                  className="rn-service-one color-shape-7"
                >
                  <div className="inner">
                    <div className="icon">
                      <Image src={r.src} alt="" />
                    </div>
                    <div className="subtitle">Journey {r.id}</div>
                    <div className="content">
                      <h4 className="title">
                        <a
                          href="https://discord.gg/qznBmHn3GK"
                          className="font-tomoe text-lg"
                        >
                          {r.title}
                        </a>
                      </h4>
                      {r.description}
                    </div>
                  </div>
                  <a
                    className="over-link"
                    href="https://discord.gg/qznBmHn3GK"
                  ></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
