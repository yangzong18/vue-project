import Vue from 'vue'
import Router from 'vue-router'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
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
myRouter.beforeEach((to, from, next) => {
  if (DGlobal.storage.getCookie('c_user_info') && !store.getters.getUserInfo) {
    DGlobal.storage.setCookie('c_user_info', unescape(DGlobal.storage.getCookie('c_user_info')), 60 * 60 * 1000 * 24)
    store.dispatch({
      type: 'set_UserInfo',
      data: JSON.parse(unescape(DGlobal.storage.getCookie('c_user_info')))
    })
  }

  if (to.meta && to.meta.auth) {
    if (store.getters.getUserInfo) {
      next()
    } else {
      const url = encodeURIComponent(to.fullPath)
      next(`/user/login?redirect_url=${url}`)
    }
  } else {
    next()
  }
})
export default myRouter
