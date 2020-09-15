import Vue from 'vue'
import VueRouter from 'vue-router'

/*使用时再加载*/
const Login = () => import('views/login/Login');

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
