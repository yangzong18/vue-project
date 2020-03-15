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
                <img
                  data-v-4d423771
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg0NDkwNzkwNTEzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMTI3LjA0Mzk3NiA3MzkuOTQzNTAybC01OC41NTg2OTcgNy40MTU5Yy0wLjc3MzYxOS02LjA5Njg1OC0zNy42NzMwMTgtMzExLjEyNjAxNyAxMjEuMzkyNzY4LTQ5MS4wMzE0MzMgNjYuNzk0MjY1LTc1LjU3NTI1NiAxNjguMTY3MDcxLTEyOS4wODI5MTQgMzIxLjMxOTE3LTEyOS4wODI5MTQgMTU4LjAxODk0MyAwIDI2MS4yMTIyMSA1NC45MTY3NSAzMjguMTg3NjAxIDEzMi4wODUyOTRDOTk3LjQwNDc4NCA0NDEuMzc1NDk5IDk1My45NTMxNTYgNzQ3LjA0MTE1NCA5NTMuOTUzMTU2IDc0Ny4wNDExNTRsLTU4LjQ2NjYtOC4yODA1OTRjMC40MDkzMjItMi43NzUyMDYgMzguMDM2MjkxLTI4MC45MTM5MjQtMTAwLjY5MTI4My00NDAuNzU0MzUzLTY0LjM4MTMwOS03NC4xNjQxMTctMTU5Ljc5MzM1Ni0xMTEuNzQ3MDgzLTI4My41OTgwNTctMTExLjc0NzA4My0xMTkuODQ2NTUyIDAtMjEzLjA3Mzg0IDM2LjcxODI3My0yNzcuMDkyODk5IDEwOS4xNTMwMDJDOTMuNTU2MjgxIDQ1NC40MzM5MSAxMjYuNjgwNzAyIDczNi44OTUwNzMgMTI2Ljk5NzkyNyA3MzkuNjI1MjU0TDEyNy4wNDM5NzYgNzM5Ljk0MzUwMiIgcC1pZD0iMjI5OCIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik04MDYuMzY4ODY2IDg5NC42Njg0MjMgNzE3LjgxMDkyNCA4OTQuNjY4NDIzIDcxNy44MTA5MjQgNTY5Ljk2NjIwMyA4MDYuMzY4ODY2IDU2OS45NjYyMDMgODA2LjM2ODg2NiA4OTQuNjY4NDIzIDgwNi4zNjg4NjYgODk0LjY2ODQyM1oiIHAtaWQ9IjIyOTkiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMzA0LjU5NTc4OCA4OTQuNjY4NDIzIDIxNi4wMzY4MjMgODk0LjY2ODQyMyAyMTYuMDM2ODIzIDU2OS45NjYyMDMgMzA0LjU5NTc4OCA1NjkuOTY2MjAzIDMwNC41OTU3ODggODk0LjY2ODQyMyAzMDQuNTk1Nzg4IDg5NC42Njg0MjNaIiBwLWlkPSIyMzAwIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+"
                  alt
                />
                <span data-v-4d423771>3万</span>
              </div>
            </div>
            <div class="list-info">
              <p class="list-name">英文电子：请让我自嗨一会儿吧</p>
              <p class="list-author">小众也有好听的歌</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mvlist">
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/h0033bp4be2_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">All Around Me (CHANGES: The Movement)</p>
            <p data-v-af3a9bae class="author">Justin Bieber</p>
            <p data-v-af3a9bae class="date">发行时间:2020-03-03</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/j0033vypuwc_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">Habitual (CHANGES: The Movement)</p>
            <p data-v-af3a9bae class="author">Justin Bieber</p>
            <p data-v-af3a9bae class="date">发行时间:2020-03-03</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/y0033u06amm_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">白安《忽然之间》 Special Live MV</p>
            <p data-v-af3a9bae class="author">白安</p>
            <p data-v-af3a9bae class="date">发行时间:2020-02-29</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/s003342x0kc_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">솔직히 지친다</p>
            <p data-v-af3a9bae class="author">金请夏</p>
            <p data-v-af3a9bae class="date">发行时间:2020-03-02</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/g003374cxwm_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">是非之地</p>
            <p data-v-af3a9bae class="author">杨乃文</p>
            <p data-v-af3a9bae class="date">发行时间:2020-03-02</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/b0033383ohp_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">FIESTA (舞蹈版)</p>
            <p data-v-af3a9bae class="author">IZ*ONE</p>
            <p data-v-af3a9bae class="date">发行时间:2020-02-28</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/p0033fajuia_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p data-v-af3a9bae class="name">Tomorrow will be fine (Live)</p>
            <p data-v-af3a9bae class="author">苏打绿</p>
            <p data-v-af3a9bae class="date">发行时间:2020-02-29</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
            </div>
          </div>
        </div>
        <div data-v-af3a9bae class="mvitem">
          <div data-v-af3a9bae class="img-wrapper">
            <img
              data-v-af3a9bae
              alt="name"
              class="mv-img"
              src="https://shp.qpic.cn/qqvideo_ori/0/s0033nvpkwo_360_204/0"
              lazy="loaded"
            />
          </div>
          <div data-v-af3a9bae class="mv-info">
            <p
              data-v-af3a9bae
              class="name"
            >无名的你 (陈意涵Estelle &amp;#47; 戴景耀 &amp;#47; 费启鸣 &amp;#47;高瀚宇 &amp;#47; 高嘉朗 &amp;#47; 李鑫一 &amp;#47; 陆思恒 &amp;#47; 彭楚粤 &amp;#47;强东玥 &amp;#47; 苏诗丁 &amp;#47; 王晨艺 &amp;#47; 吴季峰 &amp;#47; 弦子 &amp;#47;于小彤 &amp;#47;&amp;#3</p>
            <p data-v-af3a9bae class="author">华语群星</p>
            <p data-v-af3a9bae class="date">发行时间:2020-03-02</p>
            <div data-v-af3a9bae class="mv-playcount">
              <span data-v-af3a9bae>播放量:0万</span>
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
    })
  },
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