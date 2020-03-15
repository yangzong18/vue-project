<template>
  <div class="musiclist music_list_container">
    <div class="list_content">
      <div class="music_list border-1px" v-if="musiclist" v-for="(list, index) in musiclist">
        <span class="music-name">{{list.name}}</span>
        <div class="artists-list">{{list.artists.name}}</div>
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
        fecth.get(apiUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((res) => {
			this.musiclist = res.data.result.tracks;
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

  .list_content {
    margin: 0 auto;
    padding: 40px 5px 15px;
    color: #fff;
  }
}
</style>
