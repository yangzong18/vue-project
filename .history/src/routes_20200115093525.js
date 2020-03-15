import Vue from 'vue'
import Router from 'vue-router'
import List from './views/list.vue'
import Home from './views/index.vue'
import Login from '../views/login.vue'
import User from '../views/user.vue'
import NotFound from '../components/404.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  mode:'history'
})
