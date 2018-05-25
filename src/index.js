import Button from './components/button'
import Form from './components/form'
import FormItem from './components/form-item'

import Message from './components/message'

const components = {
  Button,
  Form,
  FormItem
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
