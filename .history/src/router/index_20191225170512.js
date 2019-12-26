import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../views/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'address',
      component: Address
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
