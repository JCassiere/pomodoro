// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueNoiseGeneratorPlugin from './plugins/VueNoiseGeneratorPlugin'

Vue.use(VueNoiseGeneratorPlugin)

/* eslint-disable no-new */
Vue.filter('lowercase', (value) => {
  return value.toLowerCase()
})

Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})

Vue.filter('uppercase', (value) => {
  return value.toUpperCase()
})

Vue.filter('addspace', (value) => {
  return value + ' '
})

new Vue({
  el: 'app',
  components: { App }
})
