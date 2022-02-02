import Image from 'next/image'
import Image1 from '../public/images/bg/bg-image-2.jpg'
import Image2 from '../public/images/bg/bg-image-3.jpg'
import Image3 from '../public/images/bg/bg-image-4.jpg'
import Image4 from '../public/images/bg/bg-image-33.jpg'

export default function Slider() {
  const i = [
    {
      id: '0001',
      src: Image1
    },
    {
      id: '0032',
      src: Image2
    },
    {
      id: '3208',
      src: Image3
    },
    {
      id: '4465',
      src: Image4
    }
  ]

  return (
    <div className="slider slick-activation-01" style={{ display: 'none' }}>
      <div className="slider-thumbnail thumbnail-overlay">
        <a>
          <Image src={i[0].src} alt="" />
        </a>
        <div className="read-wrapper">
          <h5>#{i[0].id}</h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>
      <div className="slider-thumbnail thumbnail-overlay">
        <a>
          <Image src={i[1].src} alt="" />
        </a>
        <div className="read-wrapper">
          <h5>#{i[1].id}</h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>
      <div className="slider-thumbnail thumbnail-overlay">
        <a>
          <Image src={i[2].src} alt="" />
        </a>
        <div className="read-wrapper">
          <h5>#{i[2].id}</h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>
      <div className="slider-thumbnail thumbnail-overlay">
        <a>
          <Image src={i[3].src} alt="" />
        </a>
        <div className="read-wrapper">
          <h5>#{i[3].id}</h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>
    </div>
  )
}
