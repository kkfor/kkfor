<template>
  <i :class="classes"></i>
</template>
<script>
const prefixCls = 'fo-icon'

export default {
  props: {
    type: String
  },
  computed: {
    classes() {
      return `${prefixCls} ${prefixCls}-${this.type}`
    }
  }
}
</script>