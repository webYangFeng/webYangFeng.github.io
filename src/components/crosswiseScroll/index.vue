<!-- @format -->

<template>
  <div class="containerScroll">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, defineEmits } from "vue";
import { useRoute } from "vue-router";
let timeOut: any = null;
let route: any = useRoute();
let emits = defineEmits(["startRenderDom"]);
onMounted(() => {
  let container: HTMLElement = document.querySelector(".containerScroll") as HTMLElement;
  container.addEventListener("wheel", (event) => {
    emits("startRenderDom");
    event.preventDefault();
    if (timeOut) {
      return;
    }
    timeOut = setTimeout(() => {
      timeOut = null;
    }, 1000);

    let scrollBox: HTMLElement = document.querySelector(".scrollBox") as HTMLElement;
    let page_w = scrollBox.offsetWidth;
    let containerScroll: HTMLElement = document.querySelector(".containerScroll") as HTMLElement;
    if (event.deltaY > 0) {
      containerScroll.scrollTo({ top: 0, left: containerScroll.scrollLeft + page_w, behavior: "smooth" });
    } else {
      containerScroll.scrollTo({ top: 0, left: containerScroll.scrollLeft - page_w, behavior: "smooth" });
    }
  });
});

window.addEventListener("resize", () => {
  if (route.path == "/") {
    document.querySelector(".containerScroll")?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
});
</script>

<style lang="scss">
.containerScroll {
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
