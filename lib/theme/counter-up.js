import { counterUp } from 'counterup2'
import 'waypoints/lib/noframework.waypoints.js'

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
