import Button from './components/button'
import Icon from './components/icon'
import Form from './components/form'
import FormItem from './components/form-item'

import Message from './components/message'

const components = {
  Button,
  Icon,
  Form,
  FormItem
}

const views = {
  ...components
}

const install = function(Vue) {
  Object.keys(views).forEach(key => {
    Vue.component(key, views[key])
  })

  Vue.prototype.$Message = Message
  
}

// install(window.Vue)

const API = {
  install
}

// module.exports.default = module.exports = API
export default API
