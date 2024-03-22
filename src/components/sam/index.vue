<!-- @format -->

<template>
  <div class="imgBox" @click="handleMouseMove">
    <img src="/dogs.jpg" class="targetImg" ref="targetImg" @load="init" />
    <img :src="maskImgSrc" class="maskImg" ref="maskImg" v-if="maskImgSrc"/>
    <p class="sam_describe sam_guide">请点击图片任意位置。</p>
    <p class="sam_describe">将算法检出模型和推理过程放到客户端，减少服务端80%的算法压力。</p>
    <img src="/dogs.jpg" class="backgroundImg">
  </div>
</template>

<script setup>
import { InferenceSession } from "onnxruntime-web";
import { handleImageScale } from "@/utils/sam/scaleHelper";
import { onnxMaskToImage } from "@/utils/sam/maskUtils";
import { modelData } from "@/utils/sam/onnxModelAPI";
import * as ort from "onnxruntime-web";
import npyjs from "npyjs";
import { ref } from "vue";
const targetImg = ref(null);
let modelScale = null;
let tensor = null;
let model = null;
let timeOut = null;
let maskImgSrc = null;
async function init() {
  modelScale = await handleImageScale(document.querySelector(".targetImg"));
  Promise.resolve(loadNpyTensor("/dogs_embedding.npy", "float32")).then((embedding) => (tensor = embedding));
  model = await InferenceSession.create("/sam_onnx_quantized_example.onnx");
}
// 将npy文件解码为张量
async function loadNpyTensor(tensorFile, dType) {
  let npLoader = new npyjs();
  const npArray = await npLoader.load(tensorFile);
  const tensor = new ort.Tensor(dType, npArray.data, npArray.shape);
  return tensor;
}
function handleMouseMove(e) {
  // clearTimeout(timeOut);
  // timeOut = setTimeout(() => {
    let el = e.target;
    const rect = el.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const imageScale = targetImg.value ? targetImg.value.width / el.offsetWidth : 1;
    x *= imageScale;
    y *= imageScale;
    setMaskImg({ x, y, clickType: 1 });
  // }, 50);
}
// 添加mask图形
async function setMaskImg(points) {
  const feeds = modelData({ clicks: [points], tensor, modelScale });
  if (feeds === undefined) return;
  const results = await model.run(feeds);
  const output = results[model.outputNames[0]];
  maskImgSrc = onnxMaskToImage(output.data, output.dims[2], output.dims[3]).src || false;
  if (maskImgSrc) {
    let img = document.createElement("img");
    img.src = maskImgSrc;
    img.className = "maskImg";
    let oldMaskImg = document.querySelector(".maskImg");
    oldMaskImg && oldMaskImg.remove();
    document.querySelector(".imgBox").append(img);
  }
}
</script>

<style>
.backgroundImg{
  width: 100vw;
  height: 100vh;
  filter: blur(20px);
  position: absolute;
  z-index: -1;
}
.imgBox {
  position: relative;
  width: 100%;
  height: 100vh;
}
.maskImg,
.targetImg {
  box-shadow: 50px 50px 30px 1px #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.maskImg {
  opacity: 0.9;
}
.sam_describe {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 20px;
  color: #333;
  font-weight: bold;
  text-shadow: 1px 1px #666;
}
.sam_guide{
  font-size: 28px;
  top: 70px;
  color: #000;
  text-shadow: 3px 3px #fff;
}
</style>
