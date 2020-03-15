<template>
  <div id="app">
    <search></search>
    <transition name="play-slide">
      <play v-show="playPageShow"></play>
    </transition>
    <transition name="bar-slide">
      <div id="play-bar" v-show="!playPageShow">
        <div class="play-bar-image-container" @touchstart="showPlayPage" @click="showPlayPage">
          <img class="play-bar-image" src="/static/img/Vue_Music_Blur.f29e504.png">
        </div>
        <p class="play-bar-text" @touchstart="showPlayPage" @click="showPlayPage">VUE MUSIC</p>
        <img class="play-bar-button" :src="iconPlay">
      </div>
    </transition>
  </div>
</template>
<script>
import '@/common/base.css'
import Search from "@/components/Search";
import Play from "@/components/Play";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      iconPlay: require("@/assets/icon-play.png"),
      iconPause: require("@/assets/icon-pause.png"),
      playPageShow:false,
    }
  },
  methods:{
    showPlayPage(){
      event.preventDefault();
      this.playPageShow = true;
    }
  },
  components:{
    Search,
    Play
  },
  computed:{
    ...mapGetters(['coverImgUrl']),
    ...mapState({
      dataUrl(state){
        playing: state => state.PlayService.playing,
      song: state => state.PlayService.song
      }
    })
  }
}
</script>