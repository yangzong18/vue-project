import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
const myRouter = new Router({
  mode:'history',
  //只在history模式下有用
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    // { path: '/singer/:id',name:'singer', component: Singer },
    // { path: '/album/:id',name:'album',  component: Album },
    // { path: '/rank/:id',name:'rank',  component: RankPage },
    { path: '/cd/:id',name:'cd',  component: Cd }
  ]
});
export default myRouter
