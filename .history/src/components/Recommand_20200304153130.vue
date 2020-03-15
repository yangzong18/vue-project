<template>
  <div class="recommand">
    <div class="loading" v-if="loading"> {{loadingState}} </div>
    <div class="content" v-if="!loading">
      <swiper :options="swiperOptionIn" class="swiper-position">
        <swiper-slide v-for="s in slider" v-bind:key="s.id">
          <img class="recommand-swiper-img" :src="s.pic">
        </swiper-slide>
        <div class="swiper-pagination-white swiper-pagination-position" slot="pagination"></div>
      </swiper>
      <div class="hotlist">
        <div class="list-title">
          <p class="title-text">热门歌单</p>
        </div>
        <div class="list-content">
          <div class="list-item" v-for="item in songList">
            <div class="list-img">
              <img v-lazy="item.imgurl"/>
              <div class="listen-count">
                <img src="@/assets/icon-erji.svg"/>
                <span data-v-4d423771>{{item.listennum | listenCount}}</span>
              </div>
            </div>
            <div class="list-info">
              <p class="list-name"> {{item.dissname}} </p>
              <p class="list-author"> {{item.author}} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mvlist">
        <div class="mvitem" v-for="mv in mvList">
          <div class="img-wrapper">
            <img v-lazy="`https://shp.qpic.cn/qqvideo_ori/0/${mv.vid}_360_204/0`" class="mv-img"/>
          </div>
          <div class="mv-info">
            <p class="name"> {{mv.mvtitle | turnHtml}} </p>
            <p class="author"> {{mv.singer_name}} </p>
            <p class="date">发行时间:{{mv.pub_date}}</p>
            <div class="mv-playcount">
              <span >播放量:{{mv.listennum|listenCount}} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      loadingState:'正在加载...',
      loading:true,
      slider:[],
      songList:[],
      mvList:[],
      swiperOptionIn: {
        autoplay: {
          delay: 4000,
        },
        pagination: {
          el:".swiper-pagination-white",
          clickable:true,
        }
      },
    };
  },
  components:{
    swiper,
    swiperSlide
  },
  methods: {},
  created() {
    this.$store.dispatch("getRecommands").then(response => {
        this.loading = false
        this.slider = response.data.data.focus
        this.songList = response.data.data.hotdiss.list
        this.mvList = response.data.data.shoubomv.all
    })
    .catch(error=>{
      this.loadingState = '加载失败'
    });
  },
  updated() {
    this.$nextTick(function(){
      console.log(2222)
      this.$emit('changeHight');
    })
  },
  filters:{
    // listenCount: num => Math.round(num / 1000) / 10 + '万'
  },
  watch: {
    mvList: {
      handler:function(val, oldVal){
        var activeHight = document.getElementsByClassName('swiper-item')[1].offsetHeight;
        console.log(activeHight)
        document.getElementsByClassName('swiper-wrapper')[0].style.height = `${activeHight}px`;
      },
    }
  }
};
</script>
<style lang="scss" scoped>
.recommand {
  margin-top: 50px;
  .loading {
      color: #999;
      width: 100%;
      height: 150px;
      line-height: 150px;
      text-align: center;
  }
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
    .recommand-swiper-img {
      width: 100%;
      display: block;
    }
    .swiper-pagination-position {
      position: absolute;
      display: flex;
      justify-content: center;
      flex-direction: row;
      z-index: 1;
    }

  }
  
  .hotlist {
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 10px;
    box-shadow: 0 0 10px #DDD;
    .list-title {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .list-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .list-item {
        width: 50%;
        cursor: pointer;
        .list-img {
          position: relative;
          .listen-count {
            position: absolute;
            bottom: 5px;
            left:5px;
            font-size: 12px;
            align-items: center;
            display: flex;
            flex-direction: row;
            color: #fff;
            img {
              width: 15px;
              height: 15px;
              margin-right:3px;
              display: inline-block;
            } 
          }
        }
        .list-info {
          padding: 0 5px;
          font-weight: 300;
          font-size: 14px;
          margin-bottom: 10px;
          .list-name {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .list-author {
            color: #777;
          }
        }
      }
    }
  }
  .mvlist {
    .mvitem {
      background-color: #fff;
      box-shadow: 0 0 10px #ddd;
      margin: 5px 10px;
      padding: 5px;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      cursor: pointer;
      .mv-img {
        height: 33vw;
        max-height: 150px;
        display: block;
        border-radius: 5px;
      }
      .mv-info {
          padding: 5px;
          font-weight: 300;
          font-size: 14px;
          position: relative;
          .name {
            height: 40px;
            overflow: hidden;
            tx
          }
          .author,.date {
            line-height: 25px;
            color: #777;
          }
          .mv-playcount {
            position: absolute;
            left:5px;
            bottom: 5px;
            font-size: 14px;
            align-items: center;
            color: #777;
            display: flex;
            flex-direction: row;
          }
        }
    }
  }
  .swiper-position{
    position: relative;
    cursor: pointer;
  }  
}
img[lazy="loaded"] {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: imgFadeIn;
}
</style>