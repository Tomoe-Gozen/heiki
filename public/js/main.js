
 var myCursor = document.querySelector(".mouse-cursor");
 
 if (myCursor) {
  if (document.querySelector('body')) {
      const e = document.querySelector('.cursor-inner'),
          t = document.querySelector('.cursor-outer');
      let n, i = 0,
          o = !1;
      window.onmousemove = function (s) {
          o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
      }, document.querySelectorAll('a').forEach(item => {
          item.addEventListener("mouseenter", function () {
        
          e.classList.add('cursor-hover'), t.classList.add('cursor-hover')
          })
      }), document.querySelectorAll('a').forEach(item => {
        item.addEventListener("mouseleave", function (item2) {
          e.classList.remove('cursor-hover'), t.classList.remove('cursor-hover')
        })
      }), e.style.visibility = "visible", t.style.visibility = "visible"
  }
}