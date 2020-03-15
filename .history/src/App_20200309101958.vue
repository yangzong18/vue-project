<template>
  <div id="app">
    <action-sheet></action-sheet>
    <transition :name="routerViewAnimation">
      <router-view v-show="!blurBgShow"></router-view>
    </transition>
    <search v-show="!blurBgShow" @searchshow="rankshow=false" @searchhide="rankshow=true"></search>
    <div class="content-warper" v-show="rankshow&&!blurBgShow">
      <swiper :options="swiperOption" class="swiper-box" ref="appSwiper">
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
    <transition name="play-slide">
      <playing-list v-if="$store.state.NotifyService.playingList.show"></playing-list>
    </transition>
    <transition name="bar-slide">
      <div id="play-bar" v-show="!playPageShow">
        <div class="play-bar-image-container" @touchstart="showPlayPage" @click="showPlayPage">
          <img class="play-bar-image" v-lazy="coverImgUrl">
        </div>
        <p class="play-bar-text" @touchstart="showPlayPage" @click="showPlayPage"> {{song.name}} </p>
        <img class="play-bar-button" :src="playing?iconPause:iconPlay" @click="tapButton">
      </div>
    </transition>
  </div>
</template>
<script>
import '@/common/base.css'
import ActionSheet from "@/components/ActionSheet";
import Search from "@/components/Search";
import Rank from "@/components/Rank";
import Recommand from "@/components/Recommand";
import Play from "@/components/Play";
import PlayingList from "@/components/PlayingList";
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
        autoHeight:true,
        pagination: {
          el:".swiper-pagination",
          clickable:true,
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
    handleScroll (e) {
      // 页面滚动距顶部距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
                document.body.scrollTop
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if(scroll>=0){
          var activeHight = document.getElementsByClassName('swiper-slide-active')[0].offsetHeight;
          document.getElementsByClassName('swiper-wrapper')[0].style.height = `${activeHight}px`;
      }
    },
    ...mapMutations(["play", "pause", "playContinue","playIndex"])
  },
  components:{
    Search,
    Rank,
    Recommand,
    ActionSheet,
    Play,
    PlayingList,
    swiper,
    swiperSlide,
  },
  computed:{
    ...mapGetters(['coverImgUrl']),
    ...mapState({
      playing: state => state.PlayService.playing,
      song: state => state.PlayService.song
    })
  },
  mounted() {
      if(this.$route.path == '/'){
        this.rankshow = true
      }else{
        this.rankshow = false
      }
      setTimeout(() => {
        var activeHight = document.getElementsByClassName('swiper-slide-active')[0].offsetHeight;
        document.getElementsByClassName('swiper-wrapper')[0].style.height = `${activeHight}px`;
      }, 500)
      window.addEventListener('scroll', this.handleScroll, true);
      
    },
    watch: {
      $router(to,from){
        // if(this.$route.path == '/'){
        //   this.rankshow = true
        // }else{
        //   this.rankshow = false
        // }
      }
    },
  
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
  .swiper-pagination-bullet {
    display: inline-block;
  }
}
img[lazy="loaded"] {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: imgFadeIn;
}
</style>