import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
//只在history模式下有用
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
const myRouter = new Router({
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
    {
      // 博客
      path: '/blog',
      component: Blog
    },
    {
      // 音乐
      path: '/music',
      component: Music,
      meta:{
        auth:true
      },
      children: [
        {
          path: '/music/rank',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/search',
          meta: {
            auth: true
          },
          components: {
            fullscreen: MusicSearch
          }
        },
        {
          path: '/music/search/:w',
          name: 'searchlist',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSearchList
          }
        },
        {
          path: '/music/albumlist/:id',
          meta: {
            auth: true
          },
          name: 'albumlist',
          components: {
            listinfo: MusicAlbumList
          }
        },
        {
          path: '/music/sheet/:id',
          name: 'musicindex',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSheet
          }
        },
        {
          path: '/music/sheet/',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSheet
          }
        },
      ]
    },
    {
      // 关于
      path: '/about',
      component: About,
    },
    {
      // 关于
      path: '/setting',
      component: Setting,
    },
    {
      path: '/user/login',
      component: Login
    },
  ]
});
export default myRouter
