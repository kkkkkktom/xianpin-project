<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomeNew from './components/HomeNew.vue';
</script>
<template>
  <p class="test"></p>
  <div class="contain">
      <HomeCategory/>
      <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>

</template>
<style scoped lang="scss">
.contain{
    display:flex;
    justify-content: center;

}
</style>
