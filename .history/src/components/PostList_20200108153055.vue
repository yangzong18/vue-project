<template>
    <div class="PostList" id="page">
        <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="posts-list" v-else>
			<ul>
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
import $ from 'webpack-zepto';
import utils from 'utils';
export default {
    name:'PostList',
    data(){
        return {
            posts:[],
			loading:false,
			scroll:true,
        }
	},
	mounted(){
		// 滚动加载
		$(window).on('scroll', utils.throttle(this.getScrollData, 300, 1000));
		this.clientHeight = document.documentElement.clientHeight
   this.$nextTick(() => {
    let title = document.querySelector("#title")
    title.style.background = "#fff";
    let arr = document.querySelector(".is-left")
    arr.style.color = "#333"
    this.el = this.$refs.my_pull;
    window.addEventListener('scroll', this.handleScroll)
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
			this.$http({
                url:'/api/list',
                method: 'get',
              })
			  .then( (response) => {
				  console.log(response)
			  	if( response.status === 200 ){
					this.posts = response.data;
			  		this.loading = false;
			  	}
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
		// 滚动加载数据
		getScrollData() {
			if (this.scroll) {
				let totalheight = parseInt($(window).height(), 20) + parseInt($(window).scrollTop(), 20);
				if ($(document).height() <= totalheight + 200) {
					this.scroll = false;
					this.searchKey.page += 1;
					this.getData();
				}
			}
		}
	}
}
</script>