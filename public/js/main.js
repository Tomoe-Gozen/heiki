if (document.querySelector(".mouse-cursor")) {
  
    const e = document.querySelector('.cursor-inner'),
      t = document.querySelector('.cursor-outer');
    let a = document.querySelectorAll('a')
    const addCursorHover =  () => {
      e.classList.add('cursor-hover')
      t.classList.add('cursor-hover')
    }
    const removeCursorHover =  () => {
      e.classList.remove('cursor-hover')
      t.classList.remove('cursor-hover')
    }

    window.onmousemove = (s) => {
      
      t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"
      e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"
      e.style.visibility = "visible"
      t.style.visibility = "visible"
      
      a.forEach((elem) => {
        if (elem.getAttribute('listener') !== 'true') {
          elem.addEventListener("mouseenter", addCursorHover)
          elem.addEventListener("mouseleave", removeCursorHover)
        }
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