import MessageCore from './message'
import Vue from 'vue'

const prefixCls = 'fo-message'

const defaults = {
  top: 24,
  duration: 1.5
}

const Message = properties => {
  const _props = properties || {}
  const Instance = new Vue({
    render(h) {
      return h(MessageCore, {
        props: _props
      })
    }
  })
  
  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const notification = Instance.$children[0]
  // console.log(notification)
}



function notice(content='') {
  Message({
    content
  })
}


export default {
  info(options) {
    return this.message('info', options)
  },
  message(type, options) {
    return Message(options.content, options.duration, type)
  }
}
