<template>
  <div>欢迎页</div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>



<style scoped lang="scss">
</style>