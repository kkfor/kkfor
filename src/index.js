import Button from './components/button'

import Message from './components/message'

const components = {
  Button
}

const iview = {
  ...components
}

const install = function(Vue) {
  Object.keys(iview).forEach(key => {
    Vue.component(key, iview[key])
  })

  Vue.prototype.$Message = Message
  
}

// install(window.Vue)

const API = {
  install
}

// module.exports.default = module.exports = API
export default API
