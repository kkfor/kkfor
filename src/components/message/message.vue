<template>
  <transition>
    <div class="fo-message">
      <div v-html="content">message</div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>