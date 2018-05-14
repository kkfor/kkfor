<template>
  <transition>
    <div>
      <div v-html="content"></div>
    </div>
  </transition>
</template>
<script>
export default {
  content: {
    type: String,
    default: ''
  }
}
</script>