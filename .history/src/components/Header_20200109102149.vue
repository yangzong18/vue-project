<template>
    <header id="hd" class="fix-header">
		<div class="nv-toolbar">
			<div class="toolbar-nav"></div> 
			<span v-text="pageType"></span> <!----> 
			<router-link :to="{name:'post'}"><i class="iconfont add-icon"></i></router-link>
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