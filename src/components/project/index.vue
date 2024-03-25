<!-- @format -->

<template>
  <div class="projectMain">
    <!-- <h2>项目经历</h2> -->
    <div class="cardBoxList">
      <div class="cardBox" v-for="(el, i) in arr" :key="i">
        <div class="title">{{ el.title }}</div>
        <div class="jieShao">{{ el.jieShao }}</div>
        <div class="content">{{ el.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let arr = [
  {
    title: "XXX",
    jieShao: "xxxxxxxxxxxxxxxx",
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "XXX",
    jieShao: "xxxxxxxxxxxxxxxx",
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "XXX",
    jieShao: "xxxxxxxxxxxxxxxx",
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "XXX",
    jieShao: "xxxxxxxxxxxxxxxx",
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    title: "XXX",
    jieShao: "xxxxxxxxxxxxxxxx",
    content: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
];
</script>
<style scoped>
.projectMain {
  padding: 80px;
  width: 100%;
  height: 100vh;
  background: no-repeat linear-gradient(to bottom, #f5f5f5 0%, #a4d2e0 100%);
  overflow: hidden;
  box-sizing: border-box;
}
h2 {
  height: 5vh;
  line-height: 5vh;
  font-size: 1vw;
}
.cardBoxList {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.cardBox {
  overflow: hidden;
  height: 60vh;
  width: calc(20% - 1vw);
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 1vw;
  padding: 1vw;
  box-sizing: border-box;
}
.title,
.jieShao,
.content {
  width: 100%;
  word-wrap: break-word;
  word-break: normal;
}
.title {
}
</style>
