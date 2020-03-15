<template>
  <div id="app">
    <search v-show="!blurBgShow" @searchshow="rankshow=false" @searchhide="rankshow=true"></search>
    <div class="content-warper" v-show="rankshow&&!blurBgShow">
      <swiper class="swiper-box">
        <swiper-slide class="swiper-item">
          <rank></rank>
        </swiper-slide>
        <swiper-slide class="swiper-item">
          <recommand></recommand>
        </swiper-slide>
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
import Play from "@/components/Play";
import { mapMutations, mapState, mapGetters } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
const TAB_NAME = ["排行榜", "推荐"];
export default {
  data() {
    return {
      iconPlay: require("@/assets/icon-play.png"),
      iconPause: require("@/assets/icon-pause.png"),
      playPageShow:false,
      blurBgShow: false,
      rankshow: true,
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        paginationBulletRender(swiper, index, className) {
          return `<span class="${className} swiper-pagination-bullet-custom">${TAB_NAME[
            index
          ]}</span>`;
          // return '<span class="' + className + ' swiper-pagination-bullet-custom' + '">' + (index + 1) + '</span>';
        }
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
    Play
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