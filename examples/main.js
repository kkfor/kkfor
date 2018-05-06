import Vue from 'vue'
import Kkfor from '../src/index'

Vue.use(Kkfor)

Vue.config.debug = true

new Vue({
  el: '#app',
  // router: router,
  render: h=> h(App)
})