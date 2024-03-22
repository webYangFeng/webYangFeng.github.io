<template>
  <div class="containerTestStyle">
    <div class="shaky">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.containerTestStyle{
  background-color: #000;
  filter: contrast(30);
  text-align: center;
}
.shaky{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  letter-spacing: -40px;
  color: #fff;
  animation: move-letter 3s linear forwards;  //forwards当动画完成后，保持最后一帧的状态
}
@keyframes move-letter{
  0% {
    opacity: 0;
    letter-spacing: -40px;
    filter: blur(10px);
  }
  25% {
    opacity: 1;
  }
  50% {
    filter: blur(5px);
  }
  100% {
    letter-spacing: 10px;
    filter: blur(2px);
  }
}
</style>
