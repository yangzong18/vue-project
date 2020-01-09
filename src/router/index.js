import Vue from 'vue'
import Router from 'vue-router'
import List from '../views/list.vue'
import Home from '../views/index.vue'
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
      path: '*',
      component: Home
    }
  ],
  mode:'history'
})
