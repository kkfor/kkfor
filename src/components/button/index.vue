<template>
  <button
      type="button" 
      :class="classes">
      <span>
        <slot></slot>
      </span>
  </button>
</template>
<script>
const prefixCls = 'fo-btn'

export default {
  props: {
    'long': {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          [`${prefixCls}-long`]: this.long
        }
      ]
    }
  }
}
</script>