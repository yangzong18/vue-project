<template>
    <div class="SideBar">
        <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="autherinfo" v-else>
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
    name:'Side',
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
<style>
	.autherinfo {
		background: white;
		width: 25%;
		margin: 10px auto;
	}
	.autherinfo section {
		padding: 12px;
	}
	.autherinfo img {
		width: 5rem;
	}
	.autherinfo li {
		list-style:none;
	}
	.autherinfo .replies,
	.autherinfo .topics {
	    font-size: 0.72rem;
	    border-top: 10px #DDDDDD solid;
	}
	.autherinfo > div > p {
		padding: 12px 0 12px 12px;
	    background-color: rgba(212, 205, 205, 0.17);
  		font-size: 0.75rem;		
	}
	.autherinfo > div >ul > li {
		padding: 4px 0 4px 12px;
		white-space: nowrap;
	    font-size: 0.72rem;
		text-overflow: ellipsis;
		overflow: hidden;
	    line-height: 30px;
        vertical-align: middle;	
	}
	.autherinfo > div >ul > li > a {
		color: #094E99;
		text-decoration: none;
	}
</style>