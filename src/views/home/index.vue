<!-- @format -->

<template>
  <Model></Model>
  <Crosswise-scroll @startRenderDom="startRenderDom">
    <div class="scrollBox"><Welcome></Welcome></div>
    <div class="scrollBox"><work v-if="flagRand"></work></div>
    <div class="scrollBox"><Sam v-if="flagRand"></Sam></div>
    <div class="scrollBox"><imgWorks v-if="flagRand"></imgWorks></div>
  </Crosswise-scroll>
  <div class="navBoxList" @click="startRenderDom">
    <navBox index="1">首页</navBox>
    <navBox index="2">经历</navBox>
    <navBox index="3">SAM</navBox>
    <navBox index="4">卡片</navBox>
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
import { ref } from "vue";
// 优化首屏加载 避免首页animation动画卡顿
let flagRand = ref<boolean>(false);
function startRenderDom() {
  flagRand.value = true;
}
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
