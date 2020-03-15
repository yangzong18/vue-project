<template>
  <div class="music_sheet">
    <div class="list_cntent_info">
      <div class="music_list_title border-1px">
        <span class="music_index"></span>
        <span class="music_name">歌曲</span>
        <span class="music_singer">歌手</span>
        <span class="music_zhuanji">专辑</span>
        <span class="music_duration">时长</span>
      </div>
      
    </div>
  </div>
</template>
<script>
import store from "@/store";
import musicApi from "@/components/music/music.js";
import musiclist from '@/components/common/musiclist/musiclist.vue'
export default {
  name: "music_sheet",
  data() {
    return {
      currentMusic: {},
      params: this.$route.params,
      currentMusicLrcIndex: 0
    };
  },
  props: {
    lrccontent: {}
  },
  musicList() {
    return store.getters.getMusicList;
  },
  methods: {
    // 初始化音乐播放器
    initMusic() {
      musicApi.getMusicSheet(this.params.id, this);
    }
  },
  mounted() {
    this.initMusic();
  },
  created(){
      this.initMusic();
  }
};
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