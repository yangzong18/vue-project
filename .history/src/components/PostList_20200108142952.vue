<template>
    <div class="PostList">
        <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="posts-list" v-else>
			<ul>
				<li v-for="post in posts">
					<h3 :title="post.tab|formatDate" :class="post.tab">Node 12 值得关注的新特性</h3>
					<router-link v-bind:to="{name:'user_info',params:{name:post.author.loginname}}">
						<img v-bind:src="post.author.avatar_url" v-bind:title="post.author.loginname">
						<span>{{post.reply_count}}/{{post.visit_count}}</span>
					</router-link>
					<router-link v-bind:to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
						{{post.title}}
					</router-link>
					<span class="last_reply">
						{{ post.last_reply_at | formatDate}}
					</span>
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
        }
	},
	beforeMount() {
	    	this.loading = true;
	    	this.getData();
	    },
	filters:{
		timeStyle(startTime){
			return String(startTime).match(/.{10}/)[0];
		}
	},
	methods:{
		// 获取title文字
            getTitleStr(tab) {
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
            },
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
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PostList {
		background-color: white;
		padding: 0.5rem;
		padding-top: 44px;
	}
.posts-list li {
    padding: 10px 15px;
    border-bottom: 1px solid #d5dbdb;
}
	.PostList .posts {
		background-color: white;
		padding: 0.5rem;
	}
	.PostList .posts li {
		list-style: none;
		padding: 10px 15px;
    	border-bottom: 1px solid #d5dbdb;
	}
	.PostList .posts ul li img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.PostList .posts li span {
		display: inline-block;
		text-align: center;
		width: 70px;
		font-size: 12px;
		margin: 0 10px;
	}
	.PostList .posts a {
		text-decoration: none;
		color: inherit;
	    -o-text-overflow: ellipsis;
	    white-space: nowrap;
	    display: inline-block;
	    vertical-align: middle;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    max-width: 100%;
	}
	.PostList .posts a:visited {
		color:#858585;
	}	
	.PostList .posts .last_reply {
		float: right;
   		font-size: 0.7rem;
   	    margin-top: 0.3rem;
	}
</style>