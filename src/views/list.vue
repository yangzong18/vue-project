<template>
<!-- 全局header -->
   
    <div>
         <nv-head page-type="全部" ref="head"
                :fix-head="true"
                :need-add="true">
        </nv-head>
	    <div class="posts-list" id="page">
			<ul id="post-ul-li">
				<li v-for="post in posts">
					<h3 :title="post.tab|getTitleStr" :class="post.tab">{{post.title}}</h3>
					<div class="content">
						<img v-bind:src="post.author.avatar_url" v-bind:title="post.author.loginname" class="avatar">
						<div class="info">
							<p>
								<span class="name">{{post.author.loginname}}</span>
								<span class="status"><b>{{post.reply_count}}</b>/{{post.visit_count}}</span>
							</p>
							
							<p>
								<time>{{post.create_at | formatDate}}</time>
								<time>{{post.last_reply_at | formatDate}}</time>
							</p>

						</div>
					</div>
				</li>
			</ul>
	    </div>
    </div>
</template>
<script>
import nvHead from '../components/header';
import { getList } from '@/api/api'
export default {
    name:'PostList',
    components:{
		nvHead
	},
    data(){
        return {
            posts:[],
			loading:false,
			scroll:true,
			index: {},
			searchKey: {
                    page: 1,
                    limit: 20,
                    tab: 'all',
                    mdrender: true
                },
        }
    },
	mounted(){
		// 滚动加载

		this.$nextTick(() => {
			window.addEventListener('scroll', this.getScrollData)
		})
	},
	beforeMount() {
	    	this.loading = true;
	    	this.getData();
	    },
	filters:{
		timeStyle(startTime){
			return String(startTime).match(/.{10}/)[0];
		},
		getTitleStr(tab){
			let str = '';
                switch (tab) {
                    case 'share':
                        str = '分享';
                        break;
                    case 'ask':
                        str = '问答';
                        break;
                    case 'job':
                        str = '招聘';
                        break;
                    case 'good':
                        str = '精华';
                        break;
                    default:
                        str = '全部';
                        break;
                }
                return str;
		}
	},
	methods:{
		getData:function(){
			let params = {
                    page: 1,
                    limit: 20,
                    tab: 'all',
                    mdrender: true
                };
			getList(params).then(response => {
				console.log(response)
				this.scroll = true;
				let { msg, code } = response;
				if(code == 200 ) {
					response.data.forEach(this.mergeTopics);
				}
			  })
		},
		mergeTopics(post) {
			if (typeof this.posts[post.id] === 'number') {
				this.posts[post.id] = post;
			} else {
				this.index[post.id] = this.posts.length;
				this.posts.push(post);
			}
			
        },
		// 滚动加载数据
		getScrollData() {
			if (this.scroll) {
				window.onscroll = () => {
					console.log(document.documentElement.scrollTop,document.getElementById('post-ul-li').offsetHeight,document.documentElement.offsetHeight)
					//div 的高度 多出700px
					if (document.documentElement.scrollTop+document.documentElement.offsetHeight+44 > document.getElementById('post-ul-li').offsetHeight) {
                        this.scroll = false;
                        this.searchKey.page += 1;
                        this.getData();
                    }
				
				}
			}
		}
			
	}
}
</script>
<style>
@import '../assets/css/public.css';
</style>