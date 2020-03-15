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
                url: `https://cnodejs.org/api/v1/id/`,
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
/*scoped属性导致css仅对当前组件生效，而html绑定渲染出的内容可以理解为是子组件的内容，子组件不会被加上对应的属性，所以不会应用css.
解决的话把scoped属性去掉就行了*/

	.ArticleSection {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		display: inline-block;
		width: 70%;
		border: 1px solid #ddd;	
	    padding: 0.8rem 0.4rem;
	    margin-left: 3%;
	}
	.ArticleSection #content {
		padding: 2rem 1rem 2rem 1rem;
		line-height: 1.6;
		padding-bottom: 1rem;
	}
	.ArticleSection > h1 {
		font-size: 0.1rem;
	}
	.article {
		background: white;
   	    margin-bottom: 10px;
        padding-left: 20px;
        padding-top: 10px;

	}
	.article h1 {
		font-size:1.2rem;
		font-weight: 600;
	}
	.article >ul li {
		display: inline-block;
		font-size:0.8rem ;
		color:#a8a3a3 ;
		padding-left: 5px;
	}
	.article li a {
	    color: inherit;
   		 text-decoration: none;
	}
    .replySec {
        box-sizing: border-box;
        border-bottom: 1px solid #C0CCDA;
        width: 100%;
        padding: 1rem;
        background: white;
    }
    #reply {
        display: flex;
        flex-direction: column;
    }
    .replyUp {
    	display: inline-block;
    }
    .replyUp span {
    	display: inline-block;
	    vertical-align: top;
	    margin-top: 7px;
	    margin-left: 6px;
	    font-size: 14px;
	    color: #806767;
    }
    .thumbsClass {
    	float: right;
    }
    .replyUp > a{
    	color: black;
	   	text-decoration: none;
		font-weight: 600;
    }
    .replyUp a:nth-of-type(2) {
    	margin-left: -14px;
    	vertical-align: super;
    }
    .thumbsClass  {
    	color: red;
    }
    .replySec > p {
    	padding-left: 50px;
    	clear: both;
    }
    .replySec img {
    	width: 1.5rem;
    	height: 1.5rem;
    	margin-right: 1rem;
    }	
    .replySec p img {
    	overflow: hidden;
    	width: 100%;
    	height: 100%;
    }
</style>