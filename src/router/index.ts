import { createRouter, createWebHashHistory } from 'vue-router'
// RouteRecordRaw
const routes: Array<any> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/greet',
    component: () => import('@/views/greet/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue')
  },
  {path: "/:catchAll(.*)", redirect: '/404'},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
