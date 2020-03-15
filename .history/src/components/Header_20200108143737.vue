<template>
    <header id="hd" class="fix-header">
		<div class="nv-toolbar">
			<div class="toolbar-nav"><i class="iconfont icon39"></i></div> 
			<span>全部</span> <!----> 
			<router-link :to="{name:'post'}"><i class="iconfont iconzhifeiji"></i></router-link>
		</div>
        <router-view name="sidebar"></router-view>
	</header>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
export default {
	name:'Header',
	components:{
		'sidebar':SideBar
	}
}
</script>
</style>