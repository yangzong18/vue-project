<template>
  <div class="music_sheet">
  	<div class="list_content_info">
		<musiclist v-if="musicList" :musiclist = "musicList"></musiclist>
	</div>
  </div>
</template>
<script>
  import store from '@/store'
  import musicApi from '@/components/music/music.js'
  import musiclist from '@/components/common/musiclist/musiclist.vue'
  export default {
  	data () {
  		return {
			  // musicInfo: {},
  			currentMusic: {},
  			params: this.$route.params,
  			currentMusicLrcIndex: 0
  		}
  	},
  	props: {
  		lrccontent: {}
  	},
  	methods: {
  		// 初始化音乐播放器
		initMusic () {
			musicApi.getMusicList()
  		}
  	},
  	computed: {
  		musicList () {
  			return store.getters.getMusicList
  		}
  	},
  	watch: {
  		'$route' (to, from) {
  			this.params = this.$route.params
  		}
  	},
  	components: {
  		musiclist
  	},
  	mounted () {
  		this.$nextTick(() => {
			// alert(JSON.stringify(this.params))
			this.initMusic()
			// musicApi.musicEvent(this)
		})
	
  	}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/border-1px/index.styl'
	.list_content_info
		height:100%
		box-sizing:border-box
	video
		display:none	
</style>
