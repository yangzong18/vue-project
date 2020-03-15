<template>
    <header id="hd" class="fix-header">
		<div class="nv-toolbar">
			<div class="toolbar-nav"></div> 
			<span>全部</span> <!----> 
			<a href="/add" class=""><i class="iconfont add-icon"></i></a></div></header>
</template>
<script>
export default {
    name:'Header'
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