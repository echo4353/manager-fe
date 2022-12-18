<template>
  <div>首页</div>
  <router-link to="/login">去登录</router-link>
  <router-view></router-view>
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
