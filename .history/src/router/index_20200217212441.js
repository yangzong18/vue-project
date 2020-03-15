import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Home from '../components/home.vue'
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
      path: '/home',
      component: Home
    },
    const Blog = r => require.ensure([], () => r(require('@/components/blog/blog.vue')), 'blog')
  ]
});
