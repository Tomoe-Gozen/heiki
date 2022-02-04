import Image from 'next/image'
import Icon1 from '../public/images/icons/icon-1.png'
import Icon2 from '../public/images/icons/icon-2.png'
import Icon3 from '../public/images/icons/icon-3.png'

export default function Roadmap() {
  const roadmapSteps = [
    {
      id: 1,
      title: `Q2 2022`,
      src: Icon1,
      description: (
        <>
          <ul>
            <li>Launch our season 1 Tomoe Gozen</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      title: `Q2 2022`,
      src: Icon2,
      description: (
        <>
          <ul>
            <li>Launch our season 1 Tomoe Gozen</li>
          </ul>
        </>
      )
    },
    {
      id: 3,
      title: `Q2 2022`,
      src: Icon3,
      description: (
        <>
          <ul>
            <li>Launch our season 1 Tomoe Gozen</li>
          </ul>
        </>
      )
    }
  ]

  return (
    <>
      <a className="anchor" id="roadmap"></a>
      <div className="rn-service-area rn-section-gapTop">
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
              <div
                key={r.id}
                className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-12"
              >
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
                        <a href="#">{r.title}</a>
                      </h4>
                      <p className="description">{r.description}</p>
                      <a className="read-more-button" href="#">
                        <i className="feather-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <a className="over-link" href="#"></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
