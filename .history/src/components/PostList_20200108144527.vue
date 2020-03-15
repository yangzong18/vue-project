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
						<router-link v-bind:to="{name:'user_info',params:{name:post.author.loginname}}">
							<img v-bind:src="post.author.avatar_url" v-bind:title="post.author.loginname">
							<span>{{post.reply_count}}/{{post.visit_count}}</span>
							<p class="info">
								<span class="name">{{post.post.author.loginname}}</span>
								<span class="status"></span>
							</p>
					</router-link>
						<img :src="https://avatars2.githubusercontent.com/u/227713?v=4&amp;s=120" class="avatar"> 
						<div class="info">
							<p><span class="name">
                                atian25
                            </span> <span class="status"><b>86</b>
                                /289379
                            </span></p> <p><time>8月前</time> <time>1天前</time></p></div></div>
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