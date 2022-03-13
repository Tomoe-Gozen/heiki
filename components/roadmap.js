import Image from 'next/image'
import Icon1 from '../public/images/icons/icon-1.png'
import Icon2 from '../public/images/icons/icon-2.png'
import Icon3 from '../public/images/icons/icon-3.png'

export default function Roadmap() {
  const roadmapSteps = [
    {
      id: 1,
      title: 'Q1 2022',
      src: Icon1,
      description: (
        <ul>
          <li>
            Launch our <strong className="text-tomoe">season 1 Heiki</strong>
          </li>
          <li>
            <strong className="text-tomoe">8 Eth</strong> contribution for
            charity
          </li>
          <li>
            Transparency of <strong className="text-tomoe">30%</strong> will be
            put into warrior treasures
          </li>
          <li>
            <strong className="text-tomoe">40%</strong> of Tomoe royalties
            creators will be added into warrior treasure
          </li>
          <li>
            Free <strong className="text-tomoe">merch store</strong> to holders
          </li>
        </ul>
      )
    },
    {
      id: 2,
      title: 'Q2 2022',
      src: Icon2,
      description: (
        <ul>
          <li>
            Community vote for our{' '}
            <strong className="text-tomoe">marketing and partnership</strong>
          </li>
          <li>
            <strong className="text-tomoe">Season 2</strong> releases of male
            samurai for the holders
          </li>
          <li>
            Purchase <strong className="text-tomoe">3x3</strong> land in sandbox
            for game development
          </li>
        </ul>
      )
    },
    {
      id: 3,
      title: 'Q3 2022',
      src: Icon3,
      description: (
        <>
          <ul>
            <li>
              IRL events in <strong className="text-tomoe">Bali</strong>,
              Indonesia
            </li>
            <li>Roadmap 2.0</li>
          </ul>
        </>
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
                    <div className="subtitle">Step {r.id}</div>
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
