import Image from 'next/image'
import Image1 from '../public/images/bg/bg-image-1.jpg'
import Image2 from '../public/images/bg/bg-image-2.jpg'
import Image3 from '../public/images/bg/bg-image-3.jpg'
import Image4 from '../public/images/bg/bg-image-4.jpg'
import Image5 from '../public/images/bg/bg-image-5.jpg'
import Image6 from '../public/images/bg/bg-image-6.jpg'
import Image7 from '../public/images/bg/bg-image-7.jpg'

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
      id: '4466',
      src: Image5
    },
    {
      id: '4467',
      src: Image6
    },
    {
      id: '4468',
      src: Image7
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
            {/* <h5>#{i.id}</h5> */}
            <span>Heiki</span>
          </div>
        </div>
      ))}
    </div>
  )
}
