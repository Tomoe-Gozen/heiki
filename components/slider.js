import Image from 'next/image'
import Image1 from '../public/images/collection/1.jpg'
import Image2 from '../public/images/collection/2.jpg'
import Image3 from '../public/images/collection/3.jpg'
import Image4 from '../public/images/collection/4.jpg'
import Image5 from '../public/images/collection/5.jpg'
import config from '../config.json'

export default function Slider() {
  const images = [
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
    },
    {
      id: '4469',
      src: Image5
    }
  ]

  return (
    <div className="slider slick-activation-01" style={{ display: 'none' }}>
      {images.map((i) => (
        <div key={i.id} className="slider-thumbnail thumbnail-overlay">
          <a>
            <Image src={i.src} priority alt="" />
          </a>
          <div className="read-wrapper">
            <h5>#{i.id}</h5>
            <span>{config.appName}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
