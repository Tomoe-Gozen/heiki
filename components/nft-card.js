import Image from 'next/image'

export default function NftCard({ name, image }) {
  return (
    <div className="product-style-one no-overlay d-flex flex-column justify-content-between mx-lg-7 mx-5">
      <div className="card-thumbnail">
        <a>
          <Image
            quality="65"
            src={image}
            placeholder="blur"
            blurDataURL="/images/logo/logo-twitter.jpg"
            alt=""
            width="512"
            height="512"
          />
        </a>
      </div>
      <div className="card-details">
        <h2 className="font-tomoe text-xs mb-0 pt-4">{name}</h2>
      </div>
    </div>
  )
}
