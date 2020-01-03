<template>
    <div class="PostList">
        <div class="loading" v-if="loading">
	        Loading...
	    </div>
	    <div class="posts" v-else>
			<ul>
				<li v-for="post in posts">
					<router-link :to="{ name: 'user_info', params: { name: post.author.loginname }}" :title="post.author_id">
						<img :src="post.author.avatar_url" :title="post.author.loginname"/>
					</router-link>
					<span>
						{{ post.reply_count }}/{{ post.visit_count }}
					</span>
					<router-link :to="{ name: 'post_content', params: { id: post.id,name:post.author.loginname }}" :title="post.title">
						{{ post.title }}
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
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Header {
		background:#5a5555 ;
		height: 50px;
	}
	a {
		text-decoration: none;
		color: #cbc9c9;
	}
	img {
		max-width: 120px;
		margin-left: 50px;
		margin-top: 10px;
	}
	 span {
		float: right;
		margin-right: 50px;
		margin-top: 10px;
	}
</style>