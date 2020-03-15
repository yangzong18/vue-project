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
    name:'SideBar',
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
<style scoped>
	.SideBar {
		float: right;
		width: 24%;
		box-sizing: border-box;
	    margin-right: 3%;
	    padding: 0.8rem 0.4rem;		
	}
	.SideBar .autherinfo {
		background: white;
	}
	.SideBar > div p {
		padding: 12px 0 12px 12px;
	    background-color: rgba(212, 205, 205, 0.17);
  		font-size: 0.75rem;
	}
	.SideBar img {
	    width: 3.5rem;
	    display: inline-block;
	    padding: 0 0 0 6px;
	    border-radius: 3px;
	}
	.SideBar a{
		text-decoration: none;
		color: #a8a3a3;
	}
	.SideBar .authersummay  > a {
		display: inline-block;
	    padding: 12px 0 0 6px;
	    vertical-align: top;
	}
	.SideBar .authersummay  > a[title] {
		margin-top: 20px;
  	    margin-left: 2px;
	}
	.SideBar section {
		padding: 12px 0 12px 12px;
		font-size: 0.75rem;
	}
	.SideBar li {
		list-style: none;
	}
	.recent_topics,.recent_replies {
	    font-size: 0.72rem;
	    border-top: 10px #DDDDDD solid;
	}
	.recent_topics li,
	.recent_replies li {
		padding: 4px 0 0 12px;
		color: #C0CCDA;
		white-space: nowrap;
	}
	.recent_topics ul,
	.recent_replies ul {
		padding: 10px 0 10px 0;
	}
	.recent_topics li a,
	.recent_replies li a {
		text-overflow: ellipsis;
		overflow: hidden;
	    max-width: 95%;
   		display: inline-block;
	}	
</style>