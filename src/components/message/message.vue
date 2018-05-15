<template>
  <transition>
    <div class="fo-message">
      <div v-html="content"></div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    content: String,
    default: ''
  },
  mounted() {
    setTimeout(function() {
      document.body.removeChild(document.getElementsByClassName('fo-message')[0]);
    }, 1000);
  }
}
</script>