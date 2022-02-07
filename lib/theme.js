import jQuery from 'jquery'
import sal from 'sal.js'
import 'slick-carousel'
import feather from 'feather-icons'
import { counterUp } from 'counterup2'
import 'waypoints/lib/noframework.waypoints.js'

const isMobile = () => {
  let check = false
  ;(function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true
  })(navigator.userAgent || navigator.vendor || window.opera)
  return check
}

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

  $(slickClass).not('.slick-initialized').slick({
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
  if (myCursor.length && !isMobile()) {
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
  // Get the header
  var header = document.getElementsByClassName('header--sticky')
  var anchors = document.getElementsByClassName('anchor')

  // Get the offset position of the navbar
  var sticky =
    document.documentElement.scrollHeight > 1000 ? header[0].offsetTop : 350
  // When the user scrolls the page, execute myFunction
  window.onscroll = () => {
    if (window.pageYOffset > sticky) {
      header[0].classList.add('sticky')
      Array.prototype.forEach.call(anchors, function (anchor) {
        anchor.classList.add('scroll-margin-top')
        anchor.classList.remove('scroll-margin-top-xl')
      })
    } else {
      header[0].classList.remove('sticky')
      Array.prototype.forEach.call(anchors, function (anchor) {
        anchor.classList.add('scroll-margin-top-xl')
        anchor.classList.remove('scroll-margin-top')
      })
    }
  }
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
