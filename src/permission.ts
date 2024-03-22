import router from './router'

// const whiteList:Array<string> = ['/greet'] // 路由白名单

router.beforeEach(async(to:any, from:any, next:any) => {
  next();
})