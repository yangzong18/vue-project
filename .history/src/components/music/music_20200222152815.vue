<template>
  <div class="music_list">
    <div class="list_content">
      	<span class="list_empty" v-if="!musiclist.length">暂无音乐列表哦 !</span>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import musicApi from "@/components/music/music.js";
import musiclist from "@/components/common/musiclist/musiclist.vue";
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
	  musiclist:{},
      params: this.$route.params,
      currentMusicLrcIndex: 0
    };
  },
  props: {
    lrccontent: {}
  },
  methods: {
    // 初始化音乐播放器
    initMusic() {
      this.musiclist = musicApi.getMusicList()
    }
  },
  computed: {
    musicList() {
      return store.getters.getMusicList;
    }
  },
  mounted() {
    this.$nextTick(() => {
		musicApi.getMusicList()
      this.musiclist = musicApi.getMusicList()
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl';
@import '~common/stylus/border-1px/index.styl';

.music_sheet {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .list_content_info {
    width: 768px;
    margin: 0 auto;
    padding: 40px 5px 15px;
  }
}
</style>
