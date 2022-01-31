if (document.querySelector(".mouse-cursor")) {
    const e = document.querySelector('.cursor-inner'),
      t = document.querySelector('.cursor-outer');
      
    window.onmousemove = (s) => {

      t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"
      e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"
      e.style.visibility = "visible"
      t.style.visibility = "visible"

      document.querySelectorAll('a').forEach(item => {
        item.addEventListener("mouseenter", function () {
          e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
        })
        item.addEventListener("mouseleave", function (item2) {
          e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover')
        })
      })

    }
}


window.addEventListener('scroll', () => {
  let header = document.querySelector('.header--sticky')

  if (window.pageYOffset > 250) {
    header?.classList.add('sticky')
  } else {
    header?.classList.remove('sticky')
  }
})