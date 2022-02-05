import jQuery from 'jquery'
import sal from 'sal.js'
import 'slick-carousel'
import feather from 'feather-icons'
import { counterUp } from 'counterup2'
import 'waypoints/lib/noframework.waypoints.js'

const initCounterUp = () => {
  document.querySelectorAll('.counter-odomitter-active').forEach((el) => {
    new Waypoint({
      element: el,
      handler: function () {
        counterUp(el, {
          duration: 2000,
          delay: 10
        })
        this.destroy()
      },
      offset: 'bottom-in-view'
    })
  })
}

const initFeather = () => {
  feather.replace()
}

const initSlickCarousel = () => {
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
}

const initStickyAdjust = () => {
  $('.rbt-sticky-top-adjust').css({
    top: 100
  })
}

const initMouseCursor = () => {
  var myCursor = jQuery('.mouse-cursor')
  if (myCursor.length) {
    if ($('body')) {
      const e = document.querySelector('.cursor-inner'),
        t = document.querySelector('.cursor-outer')
      let n,
        i = 0,
        o = !1
      ;(window.onmousemove = function (s) {
        o ||
          (t.style.transform =
            'translate(' + s.clientX + 'px, ' + s.clientY + 'px)'),
          (e.style.transform =
            'translate(' + s.clientX + 'px, ' + s.clientY + 'px)'),
          (n = s.clientY),
          (i = s.clientX)
      }),
        $('body').on('mouseenter', 'a, .cursor-pointer', function () {
          e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
        }),
        $('body').on('mouseleave', 'a, .cursor-pointer', function () {
          ;($(this).is('a') && $(this).closest('.cursor-pointer').length) ||
            (e.classList.remove('cursor-hover'),
            t.classList.remove('cursor-hover'))
        }),
        (e.style.visibility = 'visible'),
        (t.style.visibility = 'visible')
    }
  }
}

const initStickyHeader = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('.header--sticky').addClass('sticky')
    } else {
      $('.header--sticky').removeClass('sticky')
    }
  })
}

const initTheme = () => {
  window.$ = window.jQuery = jQuery
  initStickyHeader()
  initMouseCursor()
  initStickyAdjust()
  sal()
  initSlickCarousel()
  initFeather()
  initCounterUp()
}

export default initTheme
