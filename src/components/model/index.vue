<!-- @format -->

<template>
  <div class="modelMain">
    <canvas id="three"></canvas>
  </div>
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { onMounted, onBeforeUnmount } from "vue";
onMounted(() => {
  initThree();
});
let width: number = 0;
let height: number = 0;
let timeIndex: number = 0;
function initThree() {
  const scene = new THREE.Scene();
  const canvas: HTMLElement = document.querySelector("#three") as HTMLElement;
  const modelMain: HTMLElement = document.querySelector(".modelMain") as HTMLElement;
  // 创建环境
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  //设置设备像素比。通常用于避免HiDPI设备上绘图模糊
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearAlpha(0.0);
  // 创建相机
  width = modelMain.offsetWidth;
  height = modelMain.offsetHeight;
  var k: number = width / height; //窗口宽高比
  var s: number = 100; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //创建相机对象
  var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  camera.position.set(-360, 100, 200); //设置相机位置
  camera.lookAt(scene.position); //设置相机方向(指向的场景对象)

  // 环境光
  const ambient = new THREE.AmbientLight("#FFF", 1);
  scene.add(ambient);

  let group = new THREE.Group();
  const gltfLoader = new GLTFLoader();
  var mixer: any = null; //声明一个混合器变量
  gltfLoader.load("/model/stylized.glb", (gltf: any) => {
    let model = gltf.scene;
    model.scale.set(150, 150, 150);
    model.position.set(0, 0, 20);
    group.add(model);

    model.traverse((e: any) => {
      if (e instanceof THREE.Mesh) {
        // 开启投射影响
        e.castShadow = true;
        // 开启被投射阴影
        e.receiveShadow = true;
      }
    });
    mixer = new THREE.AnimationMixer(model);
    // obj.animations[0]：获得剪辑clip对象
    // // 剪辑clip作为参数，通过混合器clipAction方法返回一个操作对象AnimationAction
    var AnimationAction = mixer.clipAction(gltf.animations[0]);
    // 8秒播放完
    AnimationAction.setDuration(5).play();
  });
  scene.add(group);

  // 创建一个时钟对象Clock
  var clock = new THREE.Clock();
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  animate();
  function animate() {
    controls.update();
    renderer.render(scene, camera);
    timeIndex = requestAnimationFrame(animate);

    // 更新混合器相关的时间
    mixer && mixer.update(clock.getDelta());
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
  }
}
function resizeRendererToDisplaySize(renderer: any) {
  const canvas = renderer.domElement;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
onBeforeUnmount(() => {
  // 取消动画帧
  cancelAnimationFrame(timeIndex);
});
</script>

<style lang="scss">
.modelMain {
  width: 10vw;
  height: 20vh;
  position: fixed;
  left: 10vw;
  top: 0;
  z-index: 1;
  border-radius: 20px;
  overflow: hidden;
  // box-shadow: 0 0 10px 0px red;
  #three {
    width: 100%;
    height: 100%;
  }
}
// @media screen and (max-width: 800px) {
// .modelMain {
// width: 50vw;
// }
// }
</style>
