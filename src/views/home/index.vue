<!-- @format -->

<template>
  <Model></Model>
  <Crosswise-scroll>
    <div class="scrollBox"><Welcome></Welcome></div>
    <div class="scrollBox"><work></work></div>
    <div class="scrollBox"><project></project></div>
    <div class="scrollBox"><Sam></Sam></div>
    <div class="scrollBox"><imgWorks></imgWorks></div>
  </Crosswise-scroll>
  <div class="navBoxList">
    <navBox index="1">首页</navBox>
    <navBox index="2">工作</navBox>
    <navBox index="3">项目</navBox>
    <navBox index="4">SAM</navBox>
    <navBox index="5">卡片</navBox>
  </div>
</template>

<script lang="ts" setup>
import Sam from "@/components/sam/index.vue";
import Model from "@/components/model/index.vue";
import navBox from "@/components/navBox/index.vue";
import imgWorks from "@/components/imgWorks/index.vue";
import CrosswiseScroll from "@/components/crosswiseScroll/index.vue";
import Welcome from "@/components/Welcome/index.vue";
import work from "@/components/work/index.vue";
import project from "@/components/project/index.vue";
</script>

<style lang="scss">
.scrollBox {
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  overflow: hidden;
}
.navBoxList {
  position: absolute;
  display: flex;
  top: 2vh;
  right: 2vw;
}
</style>
