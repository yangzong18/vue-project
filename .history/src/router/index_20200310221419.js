import Vue from 'vue'
import Router from 'vue-router'

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
    }, 
    {
      path: '/seller',
      component: seller
    }
  ]
})
