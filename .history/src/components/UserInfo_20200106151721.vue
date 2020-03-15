<template>
    <div class="UserInfo"><div class="userInfomation"><section><img src="https://avatars3.githubusercontent.com/u/10890665?v=4&amp;s=120" title="hanzichi"> <span>hanzichi</span> <p>330 积分</p> <p>注册时间：4年前</p></section> <div class="replies"><p>回复的主题</p> <ul><li><a href="/topic/5e0c53b801c0915a9d9bd697&amp;auther=hanzichi" class="" title="nuxt 框架是不是性能很差？怎么优化呢">
						nuxt 框架是不是性能很差？怎么优化呢
					</a></li><li><a href="/topic/5e02fc870696c446bf64fff6&amp;auther=hanzichi" class="" title="Node ORM 框架如何在 ORM 往下一层操作数据？">
						Node ORM 框架如何在 ORM 往下一层操作数据？
					</a></li><li><a href="/topic/5c7ca27e5b8cb21491ca58a2&amp;auther=hanzichi" class="" title="请教下 node 包源码中用了 es modules，clone 下来一般如何本地运行？">
						请教下 node 包源码中用了 es modules，clone 下来一般如何本地运行？
					</a></li><li><a href="/topic/5b6d5a7f58db3ccf66a453a5&amp;auther=hanzichi" class="" title="如何能用 https 访问反向代理的 node 服务器？">
						如何能用 https 访问反向代理的 node 服务器？
					</a></li><li><a href="/topic/55b0448a9594740e76ab3e92&amp;auther=wenshiqi0" class="" title="koa怎么创建一个https的服务器呢">
						koa怎么创建一个https的服务器呢
					</a></li></ul></div> <div class="topics"><p>创建的主题</p> <ul><li><a href="/topic/5e0c53b801c0915a9d9bd697&amp;auther=hanzichi" class="" title="nuxt 框架是不是性能很差？怎么优化呢">
						nuxt 框架是不是性能很差？怎么优化呢
					</a></li><li><a href="/topic/5e02fc870696c446bf64fff6&amp;auther=hanzichi" class="" title="Node ORM 框架如何在 ORM 往下一层操作数据？">
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
					</a></li></ul></div></div></div>
</template>
<script>
export default {
    name:'UserInfo',
    data(){
        return {
            posts:[],
            loading:false,
        }
	},
	mounted:function(){
      this.$nextTick(function(){
        this.getData();
      })
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.PostList .posts {
		background-color: white;
		padding: 0.5rem;
		margin: 0.5rem 3rem;
	}
	.PostList .posts li {
		list-style: none;
		margin-bottom: 14px;
		border-bottom: 1px solid #E7E7E7;
		line-height: 30px;
	}
	.PostList .posts ul li img {
		width: 1.5rem;
		height: 1.5rem;
	}
	.PostList .posts li span {
		display: inline-block;
		text-align: center;
		width: 70px;
		font-size: 12px;
		margin: 0 10px;
	}
	.PostList .posts a {
		text-decoration: none;
		color: inherit;
	    -o-text-overflow: ellipsis;
	    white-space: nowrap;
	    display: inline-block;
	    vertical-align: middle;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    max-width: 70%;
	}
	.PostList .posts a:visited {
		color:#858585;
	}	
	.PostList .posts .last_reply {
		float: right;
   		font-size: 0.7rem;
   	    margin-top: 0.3rem;
	}
</style>