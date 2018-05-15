import MessageCore from './message'
import Vue from 'vue'

const prefixCls = 'fo-message'

const defaults = {
  top: 24,
  duration: 1.5
}

function Message(content='', duration=defaults.duration, type){
  const MessageFun = Vue.extend(MessageCore)

  const Instance = new MessageFun({
    data: {
      content: `
      <div class="${prefixCls} ${prefixCls}-${type}">
        <span>${content}</span>
      </div>
      `
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  setTimeout(function() {
    document.body.removeChild(document.getElementsByClassName('fo-message')[0]);
  }, duration*1000);
}

export default {
  info(options) {
    return this.message('info', options)
  },
  message(type, options) {
    return Message(options.content, options.duration, type)
  }
}
