<!-- @format -->

<template>
  <div class="workMain">
    <div class="content">
      <h2>杨枫<br/>河南安阳<br/>参加过</h2>
    </div>
    <hoverCanvas domName="workMain"></hoverCanvas>
  </div>
</template>

<script setup lang="ts">
import hoverCanvas from "@/components/hoverCanvas/index.vue";

</script>


<style scoped>
.workMain {
  width: 100%;
  height: 100vh;
  background: no-repeat linear-gradient(to bottom, #f5f5f5 0%, #a4d2e0 100%);
  overflow: hidden;
  position: relative;
}
.content{
  margin: 80px;
  background: transparent;
  z-index: 10;
  position: absolute;
  font-family: "楷体","宋体","微软雅黑";
}
h2{
  font-size: 2vw;
}
</style>
