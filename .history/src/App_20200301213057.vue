<template>
  <div id="app">
    <search></search>
    <transition name="play-slide">
      <play></play>
    </transition>
    <transition name="bar-slide">
      <div id="play-bar">
        <div class="play-bar-image-container">
          <img class="play-bar-image" v-lazy="coverImgUrl">
        </div>
        <p class="play-bar-text"></p>
        <img class="play-bar-button" src="iconPlay">
      </div>
    </transition>
  </div>
</template>
<script>
import '@/common/base.css'
import Search from "@/components/Search";
import Play from "@/components/Play";
export default {
  data() {
    return {
      iconPlay: require("@/assets/icon-play.png"),
      iconPause: require("@/assets/icon-pause.png"),
    }
  },
  components:{
    Search,
    Play
  }
}
</script>