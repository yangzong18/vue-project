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
	},
	replace: true,
    props: {
        pageType: String,
        fixHead: Boolean,
        messageCount: Number,
        scrollTop: 0,
        needAdd: {
            type: Boolean,
            default: true
        }
    },
}
</script>
</style>