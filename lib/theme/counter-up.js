import { counterUp } from 'counterup2'

document.querySelectorAll('.counter-odomitter-active').forEach((el) => {
  counterUp(el, {
    duration: 2000,
    delay: 10
  })
})
