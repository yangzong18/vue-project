<template>
    <section id="sideBar" class="nav-list show">
		<div class="user-info">
			<ul class="login-no"><li class="login"><a>登录</a></li></ul> <!----></div> <section class="list-ul"><a href="/list?tab=all" class="icon-quanbu iconfont item">全部</a> <a href="/list?tab=good" class="icon-hao iconfont item">精华</a> <a href="/list?tab=share" class="icon-fenxiang iconfont item">分享</a> <a href="/list?tab=ask" class="icon-wenda iconfont item">问答</a> <a href="/list?tab=job" class="icon-zhaopin iconfont item">招聘</a> <a href="/message" class="icon-xiaoxi iconfont item line">消息</a> <a href="/about" class="icon-about iconfont item">关于</a></section></section>
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
	.SideBar {
		float: right;
		width: 24%;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		margin-right: 3%;
		padding: 0.8rem 0.4rem;
	}
	.SideBar .userInfomation {
		background-color:#fff; 
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