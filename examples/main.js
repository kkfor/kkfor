import Vue from 'vue'
// import '../dist/styles/kkfor.css'
// import Kkfor from '../dist/kkfor'

import Kkfor from '../src/index'
import '../src/styles/index.scss'

import App from './App'

console.log(Kkfor)
Vue.use(Kkfor)

Vue.config.debug = true

new Vue({
  el: '#app',
  // router: router,
  render: h=> h(App)
})