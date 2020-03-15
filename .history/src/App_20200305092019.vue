<template>
  <div id="app">
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
      //var direction = e.deltaY>0?'down':'up' 该语句可以用来判断滚轮是向上滑动还是向下
      if(document.getElementsByTagName("li").length == 1){   //此处决定无论一次滚轮滚动的距离是多少，此事件                                                              
                                                    //都得等上次滚动结束，才会执行本次
            this.isShow = false
            setTimeout(() => {
                this.isShow = true
                ++ this.nowIndex
                if(this.nowIndex == 3){
                this.nowIndex = 0
            }
            }, 10)
        }
    }，

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
    }),
    swiper() {
      return this.$refs.appSwiper.swiper
    }
  },
  mounted() {
      setTimeout(() => {
        var activeHight = document.getElementsByClassName('swiper-slide-active')[0].offsetHeight;
        console.log(activeHight)
        document.getElementsByClassName('swiper-wrapper')[0].style.height = `${activeHight}px`;
      }, 500)
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