<template>
    <header id="hd" class="fix-header">
		<div class="nv-toolbar">
			<div class="toolbar-nav"></div> 
			<span>全部</span> <!----> 
			<router-link :to="add"><i class="iconfont icon39"></i></router-link>
		</div>
		</header>
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
    width: 49px;
    height: 44px;
    position: absolute;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgBAMAAACMSheAAAAABGdBT…VYdGRhdGU6bW9kaWZ5ADIwMTUtMTAtMTBUMTA6MDc6MTkrMDg6MDBBOXcbAAAAAElFTkSuQmCC) no-repeat 50%;
    background-size: 19px 16px;
    margin: 0;
    z-index: 1;
    top: 0;
    left: 0;
}

</style>