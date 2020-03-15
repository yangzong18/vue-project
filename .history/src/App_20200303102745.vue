<template>
  <div id="app">
    <search v-show="!blurBgShow" @searchshow="rankshow=false" @searchhide="rankshow=true"></search>
    <div class="content-warper" v-show="rankshow&&!blurBgShow">
      <swiper :options="swiperOption" class="swiper-box">
        <swiper-slide class="swiper-item">
          <rank></rank>
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <recommand></recommand>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <transition name="play-slide" @after-enter="showBlurBg" @before-leave="hideBlurBg" @after-leave="routerViewAnimation='page-slide'">
      <play v-show="playPageShow"></play>
    </transition>
    <transition name="bar-slide">
      <div id="play-bar" v-show="!playPageShow">
        <div class="play-bar-image-container" @touchstart="showPlayPage" @click="showPlayPage">
          <img class="play-bar-image" src="/static/img/Vue_Music_Blur.f29e504.png">
        </div>
        <p class="play-bar-text" @touchstart="showPlayPage" @click="showPlayPage"> {{song.name}} </p>
        <img class="play-bar-button" :src="playing?iconPause:iconPlay" @click="tapButton">
      </div>
    </transition>
  </div>
</template>
<script>
import '@/common/base.css'
import Search from "@/components/Search";
import Rank from "@/components/Rank";
import Recommand from "@/components/Recommand";
import Play from "@/components/Play";
import { mapMutations, mapState, mapGetters } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css'
const TAB_NAME = ["排行榜", "推荐"];
export default {
  data() {
    return {
      iconPlay: require("@/assets/icon-play.png"),
      iconPause: require("@/assets/icon-pause.png"),
      playPageShow:false,
      blurBgShow: false,
      rankshow: true,
      routerViewAnimation: "page-slide",
      swiperOption: {
        debugger: true,
        pagination: {
          el:".swiper-pagination",
          paginationClickable: true,
          renderBullet: function (index,className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${TAB_NAME[
              index
            ]}</span>`;
          }
        },
        
      }
    }
  },
  methods:{
    showPlayPage(event){
      event.preventDefault();
      this.playPageShow = true;
    },
    tapButton(event){
       event.preventDefault();
      this.playing ? this.pause() : this.play();
    },
    showBlurBg() {
      this.routerViewAnimation = "fade";
      this.blurBgShow = true;
    },
    hideBlurBg() {
      this.blurBgShow = false;
    },
    ...mapMutations(["play", "pause", "playContinue"])
  },
  components:{
    Search,
    Rank,
    Recommand,
    Play,
    swiper,
    swiperSlide,
  },
  computed:{
    ...mapGetters(['coverImgUrl']),
    ...mapState({
      playing: state => state.PlayService.playing,
      song: state => state.PlayService.song
    })
  }
}
</script>
<style lang="scss" scoped>
.swiper-pagination {
  top: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>