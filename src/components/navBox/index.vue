<!-- @format -->

<template>
  <div class="navBox">
    <div id="box" @click="goToPage">
      <div><slot></slot></div>
      <div>前往</div>
      <div>前往</div>
      <div>前往</div>
      <div>前往</div>
      <div>前往</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
const props = defineProps({ index: String });
let { index } = toRefs(props);
// 翻页效果
function goToPage() {
  let scrollBox: HTMLElement = document.querySelector(".scrollBox") as HTMLElement;
  let containerScroll: HTMLElement = document.querySelector(".containerScroll") as HTMLElement;
  let page_w = scrollBox.offsetWidth;
  containerScroll.scrollTo({ top: 0, left: page_w * (index.value - 1), behavior: "smooth" });
}
</script>

<style scoped>
.navBox {
  --w: 80px;
  --h: 40px;
  --deg: 20px;
  padding: 5px;
  transition: all 1s;
  cursor: pointer;
}
#box {
  width: var(--w);
  height: var(--h);
  position: relative;
  line-height: var(--h);
  transform-style: preserve-3d;
  font-size: 14px;
  text-align: center;
  transform: rotateX(0deg);
  transition: all 1s;
}
#box:hover {
  webkit-transform: rotateX(90deg) translateZ(0);
  -moz-transform: rotateX(90deg) translateZ(0);
  -ms-transform: rotateX(90deg) translateZ(0);
  -o-transform: rotateX(90deg) translateZ(0);
  transform: rotateX(90deg) translateZ(0);
}
#box > div {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  /* background-color: rgb(199, 255, 228); */
  /* box-shadow: 0 0 12px 0 rgb(125, 172, 149); */
  /* border: 1px solid rgb(125, 172, 149); */
  /* color: rgba(2, 110, 193,0.7); */
  /* text-shadow: 1px 1px #fff; */

  background-color: #6998ce;
  box-shadow: 0 0 10px 0 #4a83b8;
  border: 1px solid #4a83b8;
  color: #fff;
  text-shadow: 1px 1px #ccc;
}
#box div:nth-child(1) {
  transform: rotateY(0deg) translateZ(var(--deg));
}
#box div:nth-child(2) {
  transform: rotateY(90deg) translateZ(var(--deg));
}
#box div:nth-child(3) {
  transform: rotateY(180deg) translateZ(var(--deg));
}
#box div:nth-child(4) {
  transform: rotateY(270deg) translateZ(var(--deg));
}
#box div:nth-child(5) {
  transform: rotateX(-90deg) translateZ(var(--deg));
}
#box div:nth-child(6) {
  transform: rotateX(90deg) translateZ(var(--deg));
}
</style>
