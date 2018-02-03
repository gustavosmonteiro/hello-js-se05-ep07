// main.js
require("./main.css")

const Vue = require("vue")
const VueRouter = require("vue-router")
const VueMaterial = require("vue-material")

Vue.use(VueRouter)
Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    accent: 'light-green'
  }
})

new Vue({
  el: "#mountpoint",
  render: r => r(require("./spa.vue"))
})