<!-- @format -->

<template>
  <div class="fontStyle" @click="emit('click')">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from "vue";
let emit = defineEmits(["click"]);
</script>

<style lang="scss">
.fontStyle {
  font-size: 40px;
  font-family: 阿里妈妈刀隶体 Regular;
}
</style>
