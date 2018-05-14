<template>
  <button
      type="button" 
      :class="classes"
      @click="handleClick">
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
    },
    'type': {
      type: String
    }
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          [`${prefixCls}-long`]: this.long,
          [`${prefixCls}-${this.type}`]: !!this.type
        }
      ]
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>