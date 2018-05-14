import MessageCore from './message'
import Vue from 'vue'

function Message(msg){
  const Instance = new Vue({
    // data: {
    //     content: msg
    // }
    render(h) {
      return h(MessageCore, {
        props: {
          content: msg
        }
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  setTimeout(function() {
    document.body.removeChild(document.getElementsByClassName('fo-message')[0]);
  }, 500);
}

export default Message
