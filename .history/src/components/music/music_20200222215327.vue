<template>
  <div class="musiclist music_list_container">
    <div class="list_content">
      <span class="list_empty" v-if="!musiclist.length">暂无音乐列表哦 !</span>
      <div class="music_list border-1px" v-if="musiclist" v-for="(list, index) in musiclist">
        <span class="music_name">{{list.name}}</span>
        <div class="artists-list">{{list.artists.name}}</div>
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
      musiclist: {},
      params: this.$route.params,
      currentMusicLrcIndex: 0
    };
  },
  props: {
    lrccontent: {}
  },
  methods: {},
  computed: {},
  mounted() {
    if (store.getters.getMusicList.length) {
      musicApi.getMusicList();
      this.musiclist = store.getters.getMusicList;
    } else {
      this.musiclist = store.getters.getMusicList;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl';
@import '~common/stylus/border-1px/index.styl';

.musiclist {
  width: 1080px;
  position: relative;

  .list_content {
    width: 768px;
    margin: 0 auto;
    padding: 40px 5px 15px;
    color: #fff;
  }
}
</style>
