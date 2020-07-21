// 配置路由器相关信息
import VueRouter from 'vue-router';
import Vue from 'vue';
//import HomeMessage from "../components/HomeMessage";

// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');

const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage');
const Profile = () => import('../components/Profile');

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
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        // 不需要加/
        path: 'news',
        component: HomeNews
      }, {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    //  这里多打了一个空格结果就对不上了。
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to,from,next) => {
      console.log('about ----');
      next();
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '档案'
    },
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

// 前置钩子（hook） 回调
// 导航守卫
router.beforeEach((to, from, next) => {
  // 从from 跳转到 to
  document.title = to.matched[0].meta.title;
//  console.log('+++++++++')
  next()
//  next('/login')
});

// 后置参数(hook)
router.afterEach((to, from) => {
//    console.log('-----------')
  }
)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
