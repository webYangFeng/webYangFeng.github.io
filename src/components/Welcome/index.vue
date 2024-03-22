<!-- @format -->

<template>
  <div class="WelcomeBox">
    <div class="mask">
      <div class="content">
        Hello World
        <h2>WebYangFeng</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.WelcomeBox {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/image/img2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.mask {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  color: transparent;
  text-stroke: 2px #fff;
  -webkit-text-stroke: 2px #fff;
  background-image: url("../../assets/image/img2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-clip: text;
  text-align: center;
  font-size: 10vw;
}
h2 {
  width: 100%;
  font-size: 5vw;
}
</style>
