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
							<li v-for="topic in UserInfo">
							</li><li><a href="/topic/5e02fc870696c446bf64fff6&amp;auther=hanzichi" class="" title="Node ORM 框架如何在 ORM 往下一层操作数据？">
						Node ORM 框架如何在 ORM 往下一层操作数据？
					</a></li><li><a href="/topic/5c7ca27e5b8cb21491ca58a2&amp;auther=hanzichi" class="" title="请教下 node 包源码中用了 es modules，clone 下来一般如何本地运行？">
						请教下 node 包源码中用了 es modules，clone 下来一般如何本地运行？
					</a></li><li><a href="/topic/5b6d5a7f58db3ccf66a453a5&amp;auther=hanzichi" class="" title="如何能用 https 访问反向代理的 node 服务器？">
						如何能用 https 访问反向代理的 node 服务器？
					</a></li><li><a href="/topic/5ad17083ba60fcc66b7b80d2&amp;auther=hanzichi" class="" title="如何用 Node.js 做字符串模糊匹配？有什么有好用的包？">
						如何用 Node.js 做字符串模糊匹配？有什么有好用的包？
					</a></li><li><a href="/topic/5a6d777f9d371d4a059eef29&amp;auther=hanzichi" class="" title="求分析一个神奇的 HTTP 跳转">
						求分析一个神奇的 HTTP 跳转
					</a></li><li><a href="/topic/5a6c563ece45d44045146444&amp;auther=hanzichi" class="" title="superagent 怎么请求到 301 跳转前的网页代码？">
						superagent 怎么请求到 301 跳转前的网页代码？
					</a></li><li><a href="/topic/58245e16b71596cc3867845e&amp;auther=hanzichi" class="" title="superAgent 模块发 POST 请求的中文参数问题">
						superAgent 模块发 POST 请求的中文参数问题
					</a></li><li><a href="/topic/56fb17fa93a69671595539dc&amp;auther=hanzichi" class="" title="http 返回头中带 httponly 字段的 cookie，能用 node 获取吗？">
						http 返回头中带 httponly 字段的 cookie，能用 node 获取吗？
					</a></li><li><a href="/topic/56b2081a26d02fc6626bb489&amp;auther=hanzichi" class="" title="爬虫小记：百行代码自制自动AC机器人日解千题攻占HDOJ">
						爬虫小记：百行代码自制自动AC机器人日解千题攻占HDOJ
					</a></li><li><a href="/topic/568f2e67c2289f51658f0899&amp;auther=hanzichi" class="" title="怎样在本地调用 node 的接口？">
						怎样在本地调用 node 的接口？
					</a></li><li><a href="/topic/562a1f5f5e6f2c69589c63f8&amp;auther=hanzichi" class="" title="用 Node 做爬虫时有带 cookie 的请求怎么破？">
						用 Node 做爬虫时有带 cookie 的请求怎么破？
					</a></li><li><a href="/topic/56276c7a1af271c54823a7c7&amp;auther=hanzichi" class="" title="动态生成的页面该怎么抓取？">
						动态生成的页面该怎么抓取？
					</a></li></ul></div>
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