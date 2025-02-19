<script setup>
import { RouterView } from 'vue-router'




</script>
<template>
<!-- <el-button type="primary">Primary</el-button> -->
<RouterView/>
<p class="test">你好</p>
</template>


<style scoped lang="scss">
// @use '../src/styles/var.scss'
//这个地方不可以使用@符号不然就报错
.test{
  color:$xtxCOlor
}

</style>
