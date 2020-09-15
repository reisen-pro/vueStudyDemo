import Vue from 'vue'
import VueRouter from 'vue-router'

/*使用时再加载*/
const Home = () => import('views/login/login');

Vue.use(VueRouter)

const routes = [

]

const router = new VueRouter({
  routes
})

export default router
