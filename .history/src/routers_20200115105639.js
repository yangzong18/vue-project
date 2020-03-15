import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import List from '../views/list'
// import List from '../views/list.vue'
import Home from './views/index.vue'
import Login from './views/login.vue'
import User from './views/user.vue'
import About from './views/about.vue'
import NotFound from './components/404.vue'
import Message from './views/message.vue'
Vue.use(Router);
const router = [
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
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
    },
    {
      path: '*',
      component: NotFound,
    },
  ];

export default routers;