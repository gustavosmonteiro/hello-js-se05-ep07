// main.js
require("./main.css")

const Vue = require("vue")
const VueRouter = require("vue-router")
const VueMaterial = require("vue-material")

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'blue',
      hue: 700
    },
    accent: 'red'
  },
  teal: {
    primary: 'blue',
    accent: 'pink'
  },
  purple: {
    primary: 'purple',
    accent: 'orange'
  }
})

new Vue({
  el: "#mountpoint",
  render: r => r(require("./spa.vue"))
})