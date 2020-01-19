import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import List from '../views/list'
// import List from '../views/list.vue'
import Home from '../views/index.vue'
import Login from '../views/login.vue'
import User from '../views/user.vue'
import About from '../views/about.vue'
import NotFound from '../components/404.vue'
import Message from '../views/message.vue'
import Topic from '../views/topic.vue'
import Add from '../views/add.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{
        title: '主页',
        keepAlive: false
      }
    },
    {
      path: '/list',
      name: 'list',
      component: List,
      meta:{
        title: '文章列表',
        keepAlive: false
      }
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic,
      meta:{
        title: '文章详情',
        keepAlive: false
      }
    },
    {
      path: '/add',
      name: 'add',
      component: Add,
      meta:{
        title: '添加文章',
        keepAlive: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta:{
        title: '登录',
        keepAlive: false
      }
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: User,
      meta:{
        title: '个人中心',
        keepAlive: false
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta:{
        title: '关于',
        keepAlive: false
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{
        title: '信息',
        keepAlive: false
      }
    },
    {
      path: '*',
      component: NotFound,
      meta:{
        title: '404',
        keepAlive: false
      }
    },
  ]
});
