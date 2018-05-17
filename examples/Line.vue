<template>
  <hr :class="classes" :style="{borderBottomWidth: height + 'px', borderBottomColor: color, borderBottomStyle: type, marginTop: margin+'px',marginBottom: margin+'px' }">
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      default: 'solid'
    },
    color: {
      type: String,
      default: '#ccc'
    },
    margin: {
      type: String,
      default: "10"
    }
  },
  computed: {
    classes() {
      return [
        'fo-line'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.fo-line {
  border: none;
  margin: 10px 0;
}
</style>