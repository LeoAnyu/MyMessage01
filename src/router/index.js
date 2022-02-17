import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Register from '../views/Register'
import UserHome from '../views/UserHome'
import UpLoad from '../views/UpLoad'
import OnlineVideo from "@/views/OnlineVideo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/UserHome',
    name: 'UserHome',
    component: UserHome
  },
  {
    path: '/UpLoad',
    name: 'UpLoad',
    component: UpLoad
  },
  {
    path: '/OnlineVideo',
    name: 'OnlineVideo',
    component: OnlineVideo
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
