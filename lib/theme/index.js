import './jquery'
import './slick'
import './sal'
import './counter-up'
import './feather'

const stickyAdjust = () => {
  $('.rbt-sticky-top-adjust').css({
    top: 100
  })
}

const mouseCursor = () => {
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

const stickyHeader = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('.header--sticky').addClass('sticky')
    } else {
      $('.header--sticky').removeClass('sticky')
    }
  })
}

stickyHeader()
mouseCursor()
stickyAdjust()
