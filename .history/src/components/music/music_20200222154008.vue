<template>
  <div class="musiclist music_list_container">
    <div class="list_content">
      <span class="list_empty" v-if="!musiclist.length">暂无音乐列表哦 !</span>
      <div class="music_list border-1px" v-if="musiclist" v-for="(list, index) in musiclist">
        <h3 class="span_name">{{list.name}}</h3>
		<div class="music_author">
			<span class="span_name">{{list.artists.name}}</span>
		</div>
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
    this.$nextTick(() => {
      musicApi.getMusicList();
      this.musiclist = store.getters.getMusicList;
      console.log(this.musiclist);
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl';
@import '~common/stylus/border-1px/index.styl';

.musiclist {
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

  .list_content {
    width: 768px;
    margin: 0 auto;
    padding: 40px 5px 15px;
    color: #fff;
  }
}
</style>
