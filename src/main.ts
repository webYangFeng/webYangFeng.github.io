import { createApp } from 'vue'
import "amfe-flexible";
import App from './App.vue'
import router from './router'
import './permission';
import store from './store'
import "@/assets/iconfont/index.css";
import '@/styles/index.scss'
import TextChart from './components/textCharts/index.vue';
import fontStyle from "@/components/fontStyle/index.vue";
// 当浏览器切换标签页或关闭当前页时执行
window.addEventListener("visibilitychange", ():void => {
    if (document.visibilityState == "hidden") {}
    if (document.visibilityState == "visible" && !window.location.href.includes("greet?")) {
        sessionStorage.removeItem("online");
        let href = window.location.href.split("/#/");
        location.assign(href[0] + "/#/greet?redirect=/" + href[1]);
    }
})
createApp(App).use(store).use(router).component('text-chart', TextChart).component("fontStyle", fontStyle).mount('#app')
