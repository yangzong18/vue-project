<template>
    <div class="ArticleSection">
        <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="article" v-else>
			<ul>
				<li v-for="post in posts">
					<router-link v-bind:to="{name:'userinfo',params:{name:post.author.loginname}}">
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
		getData:function(){
			this.$http({
                url: 'https://cnodejs.org/api/v1/topics',
                method: 'get',
                params: {
                    page: 1,
                    limit:20,
                }
              })
			  .then( (response) => {
			  	if( response.data.success === true ){
					this.posts = response.data.data;
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
