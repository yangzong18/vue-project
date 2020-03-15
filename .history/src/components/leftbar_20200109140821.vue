<template>
    <section id="sideBar" class="nav-list show">
		<div class="user-info">
			<ul class="login-no">
				<li class="login"><a>登录</a></li>
			</ul> <!---->
		</div> 
		<section class="list-ul">
			<a href="/list?tab=all" class="icon-quanbu iconfont item">全部</a> 
			<a href="/list?tab=good" class="icon-hao iconfont item">精华</a> 
			<a href="/list?tab=share" class="icon-fenxiang iconfont item">分享</a> 
			<a href="/list?tab=ask" class="icon-wenda iconfont item">问答</a> 
			<a href="/list?tab=job" class="icon-zhaopin iconfont item">招聘</a> 
			<a href="/message" class="icon-xiaoxi iconfont item line">消息</a> 
			<a href="/about" class="icon-about iconfont item">关于</a>
		</section>
	</section>
</template>
<script>
export default {
    name:'LeftBar',
}
</script>