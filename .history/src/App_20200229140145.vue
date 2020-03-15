<template>
  <div id="app">
    <search></search>
    <transition name="play-slide">
      <play></play>
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