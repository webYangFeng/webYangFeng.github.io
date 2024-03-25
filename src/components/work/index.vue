<!-- @format -->

<template>
  <div class="workMain">
    <div class="content">
      <h2>菲特(天津)检测技术有限公司</h2>
      <p>工作概述:
• 主导工业质检相关项目的前端工作，以及公司一些标准化产品的开发工作。
• 独自负责网站前端开发，实现产品的页面交互及功能实现。
• 与开发人员紧密合作，制作前端及后端程序接 口标准。
• 持续的优化前端体验和页面响应速度，优化代码并保持良好兼容性，提升Web界面的易用性。
• 完成产品的设计、开发、测试、修改bug等工作，包括业务需求的沟通，功能模块详细设计，业务功能实现和功能变更维护。
• 解决项目开发过程中遇到的技术和业务难题，高质量完成Web前端开发工作。
• 开发过Web、移动端、APP、数据大屏的项目。
• 负责前端项目后期迭代、后期维护等工作。</p>
      <h2>郑州软语科技有限公司</h2>
      <p>工作概述:
实习。
</p>
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
}
</style>
