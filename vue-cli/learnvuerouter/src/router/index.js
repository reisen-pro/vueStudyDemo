// 配置路由器相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';

import Home from '../components/Home';
import About from '../components/About';
import User from '../components/User';

//  1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//  2.创建VueRouter对象
const routes = [
  {
    path: '',
    // redirect 重定向  默认重定向到主页
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    //  这里多打了一个空格结果就对不上了。
    path: '/about',
    component: About
  },
  {
    path:'/user/:userId',
    component: User
  }
];

//  创建路由对象
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  // 将默认的hash模式改成history模式 路径不会带#号
  mode: 'history',
  // 可以对class统一命名
  linkActiveClass: 'active'
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
