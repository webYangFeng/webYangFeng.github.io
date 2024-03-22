<!-- @format -->

<template>
  <div class="name_logo">
    <span>webYangFeng</span>
    <!-- <img src="../../assets/image/github_logo.png" alt="git地址" @click="goGitHub" /> -->
  </div>
</template>

<script setup lang="ts">
// function goGitHub() {
//   window.open("https://github.com/webYangFeng");
// }
</script>

<style lang="scss">
.name_logo {
  position: fixed;
  left: 1vw;
  top: 2vh;
  z-index: 99999;
  img {
    width: 50px;
    cursor: pointer;
    vertical-align: middle;
    margin-top: -6px;
  }
  span {
    margin-right: 16px;
    font-family: 阿里妈妈东方大楷 Regular;
    font-size: 32px;
  }
}
</style>
