<!-- @format -->

<template>
  <div class="WelcomeBox">
    <div class="mask">
      <div class="content">
        <span class="landIn">Hello World</span>
        <h2 class="landIn">WebYangFeng</h2>
      </div>
    </div>
  </div>
</template>

<script setup >
import { onMounted } from "vue";
onMounted(()=>{
  let landInTexts = document.querySelectorAll(".landIn");
  landInTexts.forEach((landInText) => {
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.className = "landSpan";
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.1}s`;
      landInText.append(span);
    });
  });
})
</script>

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
<style>
.landSpan {
  animation: landIn 0.8s ease-out both;
}
@keyframes landIn {
  from {
    opacity: 0;
    transform: translateY(-20%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
