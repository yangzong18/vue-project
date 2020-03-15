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
						<span>{{post.reply_count}}/{{post.visit_count}}</span>
						<div class="info">
							<span class="name">{{post.author.loginname}}</span>
							<span class="status"><b>{{post.reply_count}}</b>/{{post.visit_count}}</span>
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
        }
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