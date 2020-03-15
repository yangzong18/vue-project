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
      <div class="content">
				<span class="list_empty" v-if="!musiclist.length">暂无音乐列表哦 !</span>
				<div class="music_list border-1px" @mouseenter="showIcon" @mouseleave="hideIcon" v-if="musiclist" v-for="(list, index) in musiclist" :key="list.music_id" :data-musicid="list.music_id" :data-pic="list.music_picurl" @click="clickPlayList(list.music_id, list.music_name, list.music_picurl, list.singer_name, getMusicDurationType(list.music_dur),index), musiclist">
					<span class="music_index">
						<span v-show="getCurrentMusic.id !== list.music_id">{{index + 1}}</span>
						<img v-show="getCurrentMusic.id === list.music_id" src="https://www.daiwei.site/web_v2/bg/wave.gif" alt="未曾遗忘的青春">
					</span>
					<div class="music_name">
						<span class="span_name">{{list.music_name}}</span>
						<div class="hover_menu">
							<i class="icon-delete" v-if="showdelicon" @click.stop="deleteMusic(list.music_id)"></i>
							<i class="icon-add" v-if="!showdelicon" @click.stop="collectMusic(index)"></i>
						</div>
					</div>
					<span class="music_singer" v-if="list.singer_name">
						<span @click.stop="searchMusic($event)">{{list.singer_name}}</span>
					</span>
					<span class="music_zhuanji" v-if="list.album_name">
						<span @click.stop="getAlbum(list.album_id)">{{list.album_name}}</span>
					</span>
					<span class="music_duration">{{getMusicDurationType(list.music_dur)}}</span>
				</div>
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
      musicApi.getMusicList()
    }
  },
  computed: {
    musicList() {
		console.log(store.getters.getMusicList)
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
