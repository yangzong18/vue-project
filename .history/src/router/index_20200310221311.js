import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index/index'
import Manage from '../views/manage/index'

Vue.use(Router)

export default new Router({
  routes = [
    {
      path: '/',
      redirect: '/goods'
    }, 
    {
      path: '/goods',
      component: goods
    }, 
    {
      path: '/ratings',
      component: ratings
    }, {
    path: '/seller',
    component: seller
  }]
})
