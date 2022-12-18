<template>
  <div>欢迎来到登录页面</div>
  <el-button @click="goHome">回首页</el-button>
</template>
<script setup>
import { ref,reactive } from 'vue'
import {useRouter} from 'vue-router'
defineProps({
  msg: String,
})
const router = useRouter()
const goHome = () => {
  router.push('/welcome')
}
const count = ref(0)
</script>



<style scoped lang="scss">
</style>