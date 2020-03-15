<template>
    <header id="hd" class="fix-header">
		<div class="nv-toolbar">
			<div class="toolbar-nav"><i class="iconfont icon39"></i></div> 
			<span>全部</span> <!----> 
			<router-link :to="{name:'post'}"><i class="iconfont iconzhifeiji"></i></router-link>
		</div>
	</header>
	mv
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