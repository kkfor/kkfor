import Button from './components/button'

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
}

install(window.Vue)

const API = {
  install
}

module.exports.default = module.exports = API
