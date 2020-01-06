import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList.vue'
import UserInfo from '@/components/UserInfo.vue'
import Article from '@/components/Article.vue'
import SideBar from '@/components/SideBar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
      	main:PostList
      }
    },
    {
    	path:'/user/:name',
    	name:'user_info',
    	components:{
    		main:UserInfo,
    	}
    },
    {
    	path:'/topic/:id&auther=:name',
    	name:'post_content',
    	components:{
    		main:Article,
    		sidebar:SideBar
    	},
    },
  ]
})
