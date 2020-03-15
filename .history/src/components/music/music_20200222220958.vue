<template>
  <div class="musiclist music_list_container">
    <div class="list_content">
      <div class="music_list border-1px" v-if="musiclist" v-for="(list, index) in musiclist">
        <span class="music-name">{{list.name}}</span>
        <div class="artists-list" v-for="artist in list.artists">{{artists.name}}</div>
		<div class="music-album"></div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import musicApi from "@/components/music/music.js";
import fecth from '@/utils/fecth.js'
export default {
  data() {
    return {
      musiclist: {},
      params: this.$route.params,
      currentMusicLrcIndex: 0
    };
  },
  props: {
    lrccontent: {}
  },
  methods: {
	// 获取歌曲列表
    getMusicList () {
        const apiUrl = `http://api.netease.com/top/list?idx=1&offset=0&limit=20`
        fecth.get(apiUrl).then((res) => {
			this.musiclist = res.data.result.tracks;
			console.log(this.musiclist)
        }, (err) => {
            console.log(err)
        })  
    },
  },
  computed: {},
  created() {
	  this.getMusicList();
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl';
@import '~common/stylus/border-1px/index.styl';

.musiclist {
  width: 1080px;
  position: relative;
  margin: 0 auto;
  .music_list{
	display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color);
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid var(--border-color);
  }

  .list_content {
    margin: 0 auto;
    padding: 40px 5px 15px;
    color: #fff;
  }
}
</style>
