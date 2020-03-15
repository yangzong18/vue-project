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
					this.scroll = true;
				  if (d && d.data) {
                        d.data.forEach(this.mergeTopics);
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
					
				
					let totalheight = parseInt(document.documentElement.offsetHeight, 20) + parseInt(document.documentElement.scrollTop, 20);
					console.log(document.documentElement.scrollTop,document.body.clientHeight);
					if (document.documentElement.offsetHeight <= totalheight + 200) {
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