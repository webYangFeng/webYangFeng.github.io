import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
const pathSrc = path.resolve(__dirname, 'src');

import postCssPxToRem from 'postcss-pxtorem';
export default defineConfig({
  css: {
  //   loaderOptions: {
      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue: 192, 
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ["*"],
          }),
        ],
      },
  //   },
  },
  resolve: {
    alias: {
      '@': pathSrc,
    }
  },
  plugins: [vue()],
   // 配置前端服务地址和端口
   server: {
    host: '10.10.15.107',
    port: 80,
    // 设置反向代理，跨域
    proxy: {
      '/api1': {
        // 后台地址
        target: 'http://127.0.0.1:8990/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api1/, '')
      },
    },
  },
  base:'./'
})
