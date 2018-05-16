<template>
  <transition>
    <div :class="prefixCls">
      <div :class="classes">{{content}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'fo-message'
    },
    type: {
      type: String
    },
    content: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1.5
    }
  },
  mounted() {
    setTimeout(function() {
      document.body.removeChild(document.getElementsByClassName(this.prefixCls)[0]);
    }, this.duration*1000);
  },
  computed: {
    classes() {
      return `${this.prefixCls}-content ${this.prefixCls}-${this.type}`
    }
  }
}
</script>