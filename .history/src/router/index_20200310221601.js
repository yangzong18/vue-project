import Vue from 'vue'
import Router from 'vue-router'
// 引入自定义的tab区域的内容组件，可省略后缀名
import goods from '@/components/goods/goods';

Vue.use(Router)

export default new Router({
  routes : [
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
