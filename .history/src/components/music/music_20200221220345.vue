<template>
  <div class="music_sheet">
    <div class="list_content_info">
      <div class="music_list_title border-1px">
        <span class="music_index"></span>
        <span class="music_name">歌曲</span>
        <span class="music_singer">歌手</span>
        <span class="music_zhuanji">专辑</span>
        <span class="music_duration">时长</span>
      </div>
      <musiclist v-if="musicList" :musiclist="musicList"></musiclist>
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
      // musicInfo: {},
      currentMusic: {},
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
      musicApi.getMusicSheet()
    }
  },
  computed: {
    musicList() {
      return store.getters.getMusicList;
    }
  },
  components: {
    musiclist
  },
  mounted() {
    this.$nextTick(() => {
      this.initMusic();
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
