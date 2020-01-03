import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
      	main:PostList
      }
    }
  ]
})
