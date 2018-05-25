<template>
  <div>
    <Button @click="click">添加</Button>
    <Button>减少</Button>
  </div>
</template>
<script>
  export default {
    methods: {
      click() {
        console.log(111)
        this.$Message.info({
          content: '这是现实内容',
          duration: 2
        })
      }
    }
  }
</script>