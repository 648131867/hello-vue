//导入vue
import Vue from 'vue';
import VueRouter from 'vue-router';
//导入组件
import Main from "../views/Main";
import Login from "../views/Login";
import User from "../views/user/user";
//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main
    },
    //首页
    {
      path: '/login',
      component: Login
    },
    {
      path: '/user',
      component: () => import('../views/user/index.vue'),

      children: [{
        path: 'user',
        component: () => import('../views/user/user.vue'),
        meta: {
          index: '2-1',
        }
      },
        {
          path: 'menu',
          component: () => import('../views/user/menu.vue'),
          meta: {
            index: '2-2',
          }
        }]
    },
  ]



})

