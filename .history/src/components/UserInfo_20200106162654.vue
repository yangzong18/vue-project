<template>
    <div class="UserInfo">
		<div class="loading" v-if="loading">
	        Loading...
	    </div>
		<div class="userInfomation" v-else>
			<section>
				<img :src="UserInfo.avatar_url" :title="UserInfo.loginname"> 
				<span>{{ UserInfo.loginname }}</span> 
				<p>{{ UserInfo.score}} 积分</p> 
				<p>注册时间：{{ UserInfo.create_at|formatDate }}</p>
			</section> 
				<div class="replies">
					<p>回复的主题</p> 
					<ul>
						<li v-for="replie in UserInfo.recent_replies">
							<router-link :to="{name:'post_content',params:{id:replie.id,name:replie.author.loginname}}" :title="replie.title" >
								{{replie.title}}
							</router-link>
						</li>
					</ul>
				</div> 
					<div class="topics">
						<p>创建的主题</p> 
						<ul>
							<li v-for="topic in UserInfo.topics">
								<router-link :to="{name:'post_content',params:{id:topic.id,name:topic.author.loginname}}" :title="replie.title" >
								{{topic.title}}
							</router-link>
							</li>
							</ul>
					</div>
				</div>
		</div>
</template>
<script>
export default {
    name:'UserInfo',
    data(){
        return {
            UserInfo:[],
            loading:false,
        }
	},
	beforeMount() {
	    this.loading = true;
      	this.getUserInfo();
	},
	filters:{
		timeStyle(startTime){
			return String(startTime).match(/.{10}/)[0];
		}
	},
	methods:{
		getUserInfo:function(){
			this.$http({
                url: `https://cnodejs.org/api/v1/user/${this.$route.params.name}`,
                method: 'get',
              })
			  .then( (response) => {
			  	if( response.data.success === true ){
					this.UserInfo = response.data.data;
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
	.userInfomation {
		background: white;
		width: 75%;
		margin: 10px auto;
	}
	.userInfomation section {
		padding: 12px;
	}
	.userInfomation img {
		width: 5rem;
	}
	.userInfomation li {
		list-style:none;
	}
	.userInfomation .replies,
	.userInfomation .topics {
	    font-size: 0.72rem;
	    border-top: 10px #DDDDDD solid;
	}
	.userInfomation > div > p {
		padding: 12px 0 12px 12px;
	    background-color: rgba(212, 205, 205, 0.17);
  		font-size: 0.75rem;		
	}
	.userInfomation > div >ul > li {
		padding: 4px 0 4px 12px;
		white-space: nowrap;
	    font-size: 0.72rem;
		text-overflow: ellipsis;
		overflow: hidden;
	    line-height: 30px;
        vertical-align: middle;	
	}
	.userInfomation > div >ul > li > a {
		color: #094E99;
		text-decoration: none;
	}
</style>