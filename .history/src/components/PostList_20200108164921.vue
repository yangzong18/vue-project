<template>
    <div class="PostList" id="page">
	    <div class="posts-list">
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
export default {
    name:'PostList',
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
			this.$http({
                url:'/api/list',
                method: 'get',
              })
			  .then( (d) => {
			
				  if (d && d.data) {
					  console.log(1)
                        d.data.forEach(this.mergeTopics);
                    }
			  })
		},
		mergeTopics(post) {
			if (typeof this.index[post.id] === 'number') {
				const postsIndex = this.index[post.id];
				console.log(postsIndex)
				this.posts[postsIndex] = post;
			} else {
				console.log(this.posts)
				this.index[post.id] = this.posts.length;
				this.posts.push(post);
			}
			
        },
		// 滚动加载数据
		getScrollData() {
			if (this.scroll) {
				window.onscroll = () => {
					// 距离底部200px时加载一次
					let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 10
					console.log(bottomOfWindow)
					if (bottomOfWindow) {
						this.getData()
					}
				}
			}
		}
			
	}
}
</script>