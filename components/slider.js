import Image from 'next/image'

export default function Slider() {
  return (
    <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
      <div className="slider slick-activation-04">
        <div className="slider-thumbnail thumbnail-overlay">
          <a href="product-details.html">
            <img src="/images/bg/bg-image-2.jpg" alt="" />
          </a>
          <div className="read-wrapper">
            <h5>Sukanli</h5>
            <span>Bordcast</span>
          </div>
        </div>

        <div className="slider-thumbnail thumbnail-overlay">
          <a href="product-details.html">
            <img src="/images/bg/bg-image-3.jpg" alt="" />
          </a>
          <div className="read-wrapper">
            <h5>
              <a href="product-details.html">HasLivbe</a>
            </h5>
            <span>Md. Master</span>
          </div>
        </div>

        <div className="slider-thumbnail thumbnail-overlay">
          <a href="product-details.html">
            <img src="/images/bg/bg-image-4.jpg" alt="" />
          </a>
          <div className="read-wrapper">
            <h5>
              <a href="product-details.html">Ladicon Mos</a>
            </h5>
            <span>John Lee</span>
          </div>
        </div>

        <div className="slider-thumbnail thumbnail-overlay">
          <a href="product-details.html">
            <img src="/images/bg/bg-image-33.jpg" alt="" />
          </a>
          <div className="read-wrapper">
            <h5>Masters</h5>
            <span>Keenlee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
