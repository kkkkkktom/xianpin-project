<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>
<template>
  <p class="test">我是home界面</p>
  <div class="contain">
  <HomeCategory/>
  <HomeBanner/>
  </div>
  <HomePanel title="新鲜好物" sub-title="新鲜好物">
  </HomePanel>
  <HomeHot/>
  <HomeProduct/>

</template>
<style scoped lang="scss">
.contain{
    display:flex;
    justify-content: center;

}
</style>
