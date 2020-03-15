<template>
    <header id="hd" class="fix-header">
		<div class="nv-toolbar">
			<div class="toolbar-nav"><i class="iconfont icon39"></i></div> 
			<span>全部</span> <!----> 
			<router-link :to="{name:'post'}"><i class="iconfont iconzhifeiji"></i></router-link>
		</div>
	</header>
in"><a>登录</a></li></ul> <!----></div> <section class="list-ul"><a href="/list?tab=all" class="icon-quanbu iconfont item">全部</a> <a href="/list?tab=good" class="icon-hao iconfont item">精华</a> <a href="/list?tab=share" class="icon-fenxiang iconfont item">分享</a> <a href="/list?tab=ask" class="icon-wenda iconfont item">问答</a> <a href="/list?tab=job" class="icon-zhaopin iconfont item">招聘</a> <a href="/message" class="icon-xiaoxi iconfont item line">消息</a> <a href="/about" class="icon-about iconfont item">关于</a></section></section>
</template>
<script>
export default {
    name:'Header'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hd.fix-header {
    width: 100%;
    background-color: hsla(0,0%,100%,.95);
    position: fixed;
    top: 0;
    left: 0;
    transition: all .3s ease;
    box-shadow: 0 0 4px rgba(0,0,0,.25);
    z-index: 2;
}
#hd {
    border-bottom: 1px solid #e8e8e8;
}
.nv-toolbar>span {
    display: block;
    text-align: center;
    height: 100%;
    line-height: 44px;
    font-size: 16px;
    width: 100%;
    position: relative;
    z-index: 0;
}
.nv-toolbar .toolbar-nav {
    position: absolute;
    z-index: 4;
    top: 5px;
    left: 10px;
}
.nv-toolbar .iconzhifeiji {
    color: #42b983;
    padding: 5px 15px;
    border-radius: 5px;
}
.nv-toolbar .iconzhifeiji, .nv-toolbar .num {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 4;
}

</style>