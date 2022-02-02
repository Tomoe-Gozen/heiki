import 'slick-carousel'

const slickClass = '.slick-activation-01'

$(slickClass).slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  cssEase: 'linear',
  adaptiveHeight: true
})

$(slickClass).show()
