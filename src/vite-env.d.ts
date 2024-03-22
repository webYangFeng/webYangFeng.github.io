/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module "three";
declare module "three/examples/jsm/controls/OrbitControls.js";
declare module "three/examples/jsm/loaders/GLTFLoader.js";
declare module "vue";
declare module "echarts";
declare module "vue-router";
declare module "vuex";
declare module "axios";
