import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Home from '@/components/home.vue'
import Blog from '@/components/blog/blog.vue'
import Music from '@/components/music/music.vue'
import MusicSheet from '@/components/music/sheet/sheet.vue'
import MusicSearch from '@/components/music/search/search.vue'
import MusicSearchList from '@/components/music/search/searchList.vue'
import MusicAlbumList from '@/components/music/albumlist/albumlist.vue'
import MusicPlayList from '@/components/music/playlist/playlist.vue'
import MusicToplist from '@/components/music/toplist/toplist.vue'

import DGlobal from '@/common/js/global.js'
import store from '@/store'
import Login from '@/components/user/login/login.vue'
import User from '@/components/user/user.vue'
import UserInfo from '@/components/user/info/info.vue'
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
          path: '/',
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
          path: '/music/searchlist/:w',
          name: 'searchlist',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicSearchList
          }
        }，
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
        {
          path: '/music/playlist/',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicPlayList
          }
        },
        {
          path: '/music/toplist/',
          meta: {
            auth: true
          },
          components: {
            listinfo: MusicToplist
          }
        },
      ]
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
