import Image from 'next/image'

export default function Slider() {
  return (
    <div className="slider slick-activation-01" style={{ display: 'none' }}>
      <div className="slider-thumbnail thumbnail-overlay">
        <a href="product-details.html">
          <img src="/images/bg/bg-image-2.jpg" alt="" />
        </a>
        <div className="read-wrapper">
          <h5>#0001</h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>

      <div className="slider-thumbnail thumbnail-overlay">
        <a href="product-details.html">
          <img src="/images/bg/bg-image-3.jpg" alt="" />
        </a>
        <div className="read-wrapper">
          <h5>
            <a href="product-details.html">#0032</a>
          </h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>

      <div className="slider-thumbnail thumbnail-overlay">
        <a href="product-details.html">
          <img src="/images/bg/bg-image-4.jpg" alt="" />
        </a>
        <div className="read-wrapper">
          <h5>
            <a href="product-details.html">#1921</a>
          </h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>

      <div className="slider-thumbnail thumbnail-overlay">
        <a href="product-details.html">
          <img src="/images/bg/bg-image-33.jpg" alt="" />
        </a>
        <div className="read-wrapper">
          <h5>#6876</h5>
          <span>Tomoe Gozen</span>
        </div>
      </div>
    </div>
  )
}
