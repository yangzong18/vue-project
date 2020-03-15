import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Home from '@/components/home.vue'
import Blog from '@/components/blog/blog.vue'
import Music from '@/components/music/music.vue'
import MusicSheet from '@/components'
const MusicSheet = r => require.ensure([], () => r(require('@/components/music/sheet/sheet.vue')), 'sheet')
import store from '@/store'
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
    {
      // 博客
      path: '/blog',
      component: Blog
    },
    {
      // 音乐
      path: '/music',
      component: Music,
      children: [
        {
          path: '/',
          redirect: store.getters.getMusicRouter,
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
          path: '/music/albumlist/:id',
          meta: {
            auth: true
          },
          name: 'albumlist',
          components: {
            listinfo: MusicAlbumList
          }
        },
      ]
    },
  ]
});
