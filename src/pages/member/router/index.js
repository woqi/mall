//使用vue-router

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

let routes = [{
  path: '/',
  component: ()=> 
  import('../components/member.vue')
},{
  path: '/address',
  component: ()=>
  import('../components/address.vue'),
  children:[{//嵌套子路由
    path:'',//路径为空跳转还是all组件,没有下一级默认渲染all.vue
    // component: ()=>//方法一
    //   import('./components/all.vue'),
    redirect: 'all'//方法二
    },{
    path:'all',
    name: 'all',
    component: ()=>
      import('../components/all.vue')
    },{
    path:'form',
    name: 'form',
    component: ()=>
      import('../components/form.vue')
  }]
}]

//创建router实例
let router = new Router({
  routes
})
export default router//此时变成一个模块需要曝光