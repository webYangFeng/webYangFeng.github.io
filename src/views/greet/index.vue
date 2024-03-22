<!-- @format -->

<template>
  <div class="greetMain">
    <text-chart text="欢迎回来"></text-chart>
    <text-style>webYangFeng</text-style>
  </div>
</template>

<script setup lang="ts">
import textStyle from "@/components/textStyle/index.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
let router = useRouter();
let route = useRoute();
onMounted(() => {
  let timeout = setTimeout(() => {
    clearTimeout(timeout);
    sessionStorage.setItem("online", "1");
    router.push(route.query.redirect);
  }, 3500);
});
</script>

<style lang="scss">
.greetMain {
  position: relative;
  .containerTestStyle {
    position: absolute;
    right: 2vw;
    bottom: 20px;
    width: 400px;
    border-radius: 20px;
    overflow: hidden;
    font-size: 50px;
  }
}
</style>
