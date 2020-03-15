<template>
  <div id="rankpage">
    <div class="singer-photo">
      <img v-lazy="imgurl" alt="singerphoto">
    </div>
    <div class="header-bar" :style="{background:background}" :class="{dark:isDark}">
      <div class="back-button">
        <div class="back-icon">
          <img src="@/assets/icon-back.svg" v-if="!isDark">
          <img src="@/assets/icon-back-white.svg" v-if="isDark">
        </div>
        <div class="back-text">排行榜</div>
      </div>
    </div>
    <div id="singer-header" class="header border-1px border-1px-after" v-show="topinfo">
      <div class="header-blank"></div>
      <div class="header-warp" :style="{backgroud:gradientcolor}">
        <div class="singer-info" :class="{dark:isDark}">
          <h1 class="singer-name" v-show="topinfo.ListName.length > 0"> {{topinfo.ListName}} </h1>
          <p class="singer-fans" v-show="topinfo.listennum"> {{topinfo.listennum | listenCount}} </p>
        </div>
        <div class="play-button">
          <img src="@/assets/icon-play.png">
        </div>
      </div>

    </div>
    <div class="list" :style="{background:color}" v-if="topListData!=null">
      <ul>
        <li class="border-1px border-1px-after" v-for="(item,index) in topListData.songlist">
          <div class="music-index" :class="{dark:isDark}">{{index+1}}</div>
          <div class="music-info" @click="play(index)">
            <div class="music-name" :class="{dark:isDark}">
              {{item.data.songorig}}
            </div>
            <div class="music-singer">
              <span v-for="singername in item.data.singer">{{singername.name}}-</span>
              <span>{{item.data.albumname}}</span>
            </div>
          </div>
          <div class="action-button" @touchend.prevent="showMenu(index)" @click="showMenu(index)">
            <img src="@/assets/icon-...black.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topListData: null,
      opacity: 0,
      menuedIndex: 0,
      topid:this.$route.params.id,
      topinfo:null,
    }
  },
  created(){
    this.$store.dispatch('getRankSongs',this.topid).then((response) => {
      this.topListData = response.data
      this.topinfo = response.data.topinfo
    })
    let that = this
    window.onscroll = function () {
      if (document.getElementById('singer-header')) {
        that.opacity = window.pageYOffset / document.getElementById('singer-header').offsetHeight
      } else {
        that.opacity = 0
      }
    }
  },
  computed:{
    color() {
      if (this.topListData !== null) {
        var fixed = '00000' + this.topListData.color.toString(16)
        return '#' + fixed.substr(fixed.length - 6)
      } else {
        return '#ffffff'
      }
      return '#ffffff'
    },
    imgurl(){
      if (this.topListData !== null) {
        return this.topListData.topinfo.pic_album.replace('http://imgcache.qq.com/','http://y.gtimg.cn/')
      }
    },
    isDark: function () {
      var grayLevel = this.r * 0.299 + this.g * 0.587 + this.b * 0.114
      return (grayLevel < 192)
    },
    background: function () {
        return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.opacity + ')'
      },
    gradientcolor() {
      return '-webkit-linear-gradient(top, rgba(' + this.r + ',' + this.g + ',' + this.b + ', 0), ' + this.color + ')'
    },
    r: function () {
      return parseInt(this.color.slice(1, 3), 16)
    },
    g: function () {
      return parseInt(this.color.slice(3, 5), 16)
    },
    b: function () {
      return parseInt(this.color.slice(5, 7), 16)
    }

  }
}
</script>
<style lang="scss">
#rankpage {
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  max-width: 68vh;
  overflow-x: hidden;
  background-color: #fff;
  top: 0;
  .singer-photo {
    position: fixed;
    width: 100%;
    max-width: 68vh;
    height: 100vw;
    max-height: 68vh;
    img {
      height: 100vw;
      width: 100%;
      max-width: 68vh;
      max-height:68vh;
    }
  }
  .header-bar {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    max-width: 68vh;
    z-index: 2;
    .back-button {
      height: 25px;
      margin: 12.5px;
      margin-left: 5px;
      float: left;
      cursor: pointer;
      .back-icon {
        width: 25px;
        height: 25px;
        float: left;
        img {
          width: 25px;
        }
      }
      .back-text {
        float: left;
        line-height: 25px;
      }
    }
  }
  .header{
    width: 100%;
    max-width: 68vh;
    height: 100vw;
    max-height: 68vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header-blank {
      display: flex;
      flex-grow: 1;
    }
    .header-warp {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      /* background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgb(135, 112, 101)); */
      .play-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #eee;
        background: rgba(255, 255, 255, 0.43);
        img {
          width: 25px;
          height: 25px;
          display: inline-block;
        }
      }
    }
    .list {
      background: rgb(135, 112, 101);
      z-index: 1;
      padding-bottom: 50px;
    }
  }



}  
.dark {
  color: #fff !important;
}
</style>