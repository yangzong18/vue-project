<template>
<!-- 全局header -->
    <div>
         <nv-head page-type="全部" ref="head"
                :fix-head="true"
                :need-add="true">
        </nv-head>
	    <div id="page">
			<ul class="posts-list" id="post-ul-li">
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
								<time>{{post.create_at | getLastTimeStr(true)}}</time>
								<time>{{post.last_reply_at | getLastTimeStr(true)}}</time>
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
import $ from 'webpack-zepto';
import { getList } from '@/api/api';
import untils from '../libs/utils.js';
export default {
	name:'PostList',
    components:{
		nvHead
	},
	filters: {
            getLastTimeStr(time, isFromNow) {
                return utils.getLastTimeStr(time, isFromNow);
            }
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
			document.title = this.$route.meta.title;
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
	beforeRouteLeave(to, from, next) {
		$(window).off('scroll');
		next();
    },
	beforeRouteEnter(to, from, next) {
		next();
	},
	watch: {
            // 切换页面
            '$route' (to, from) {
                // 如果是当前页面切换分类的情况
                if (to.query && to.query.tab) {
                    this.searchKey.tab = to.query.tab;
                    this.posts = [];
                    this.index = {};
                }
                this.searchKey.page = 1;
                this.getData();
                // 隐藏导航栏
				this.$refs.head.show = false;
				$('body').css('overflow', 'auto');
            }
        },
	methods:{
		getData:function(){
			let para = this.searchKey;
			getList(para).then(response => {
				console.log(response)
				this.scroll = true;
				let { code, list } = response.data;
				if(code == 200 ) {
					list.forEach(this.mergeTopics);
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
					//div 的高度 多出700px
					if (document.documentElement.scrollTop+document.documentElement.offsetHeight+40 > document.getElementById('post-ul-li').offsetHeight) {
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