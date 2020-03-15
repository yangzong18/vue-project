<template>
  <div id="singer">
    <div class="singer-photo">
      <img v-lazy="imgurl" alt="singerphoto" />
    </div>
    <div class="header-bar" :style="{background:background}" :class="{dark:isDark}">
      <div class="back-button" @touchend.prevent="hideSinger" @click="hideSinger">
        <div class="back-icon">
          <img src="@/assets/icon-back.svg" v-if="!isDark" />
          <img src="@/assets/icon-back-white.svg" v-if="isDark" />
        </div>
        <div class="back-text">歌手</div>
      </div>
    </div>
    <div id="singer-header" class="header border-1px border-1px-after" v-if="singer != null">
      <div class="header-blank"></div>
      <div class="header-warp" :style="{background:gradientcolor}">
        <div class="singer-info" :class="{dark:isDark}">
          <h1 class="singer-name">{{singer.singer_name}}</h1>
          <p class="singer-fans">粉丝：{{singer.fans}}</p>
        </div>
        <div class="play-button" @click="play(0)">
          <img src="@/assets/icon-play.png" />
        </div>
      </div>
    </div>
    <div class="list" :style="{background:color}" v-if="singer!=null">
      <ul>
        <li class="border-1px border-1px-after" v-for="(item,index) in singer.list" :key="index">
          <div class="music-info" @click="play(index)">
            <div class="music-name" :class="{dark:isDark}">{{item.musicData.songorig}}</div>
            <div class="music-singer">
              <span v-for="singername in item.musicData.singer">{{singername.name}}--</span>
              <span>{{item.musicData.albumname}}</span>
            </div>
          </div>
          <div class="action-button" @touchend.prevent="showMenu(index)" @click="showMenu(index)">
            <img src="@/assets/icon-...black.png" alt />
          </div>
        </li>
      </ul>
      <div class="list-title" :class="{dark:isDark}">
        <p>简介</p>
      </div>
      <div class="singer-brief" :class="{dark:isDark}">
        <p>{{singer.SingerDesc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      singer: null,
      opacity: 0,
      menuedIndex: 0,
      list: ["介绍", "单曲", "专辑", "MV"],
      activeTabIndex: 0,
      singermid: this.$route.params.id
    };
  },
  methods: {
    hideSinger() {
      this.$router.go(-1);
    },
    play(index) {
      let list = [];
      this.singer.list.forEach(item => {
        list.push({
          id: item.musicData.songid,
          mid: item.musicData.songmid,
          name: item.musicData.songorig,
          singer: item.musicData.singer,
          albummid: item.musicData.albummid
        });
      });
      this.$store.commit("setPlayList", {
        index: index,
        list: list
      });
      this.$store.commit("play");
    },
    showMenu(index) {
      this.musicIndex = index;
      let that = this;
      console.log(this.singer.list[index])
      this.$store.dispatch("notifyActionSheet", {
        menus: {
          "title.noop": `${this.singer.list[index].musicData.songorig}<br/><span style="color:#666;font-size:12px;">${this.$options.filters["singer"
          ](this.singer.list[index].musicData.singer)}</span>`,
          playAsNext: "下一首播放",
          addToPlayList: "添加到播放列表"
        },
        handler: {
          ["cancel"]() {},
          ["playAsNext"]() {
            that.$store.commit("addToPlayListAsNextPlay", {
              id: that.singer.list[that.menuedIndex].musicData.songid,
              mid: that.singer.list[that.menuedIndex].musicData.songmid,
              name: that.singer.list[that.menuedIndex].musicData.songorig,
              singer: that.singer.list[that.menuedIndex].musicData.singer,
              albummid: that.singer.list[that.menuedIndex].musicData.albummid
            });
          },
          ["addToPlayList"]() {
            that.$store.commit("addPlayList", {
              id: that.singer.list[that.menuedIndex].musicData.songid,
              mid: that.singer.list[that.menuedIndex].musicData.songmid,
              name: that.singer.list[that.menuedIndex].musicData.songorig,
              singer: that.singer.list[that.menuedIndex].musicData.singer,
              albummid: that.singer.list[that.menuedIndex].musicData.albummid
            });
          }
        }
      });
    }
  },
  mounted() {
      console.log(11111)
  },
  created() {
    this.$store.dispatch("getSingerInfo", this.singermid).then(response => {
      this.singer = response.data.data;
    });
    let that = this;
    window.onscroll = function() {
      if (document.getElementById("singer-header")) {
        that.opacity =
          window.pageYOffset /
          document.getElementById("singer-header").offsetHeight;
      } else {
        that.opacity = 0;
      }
    };
  },
  computed: {
    color() {
      if (this.singer !== null) {
        let fixed = "00000" + this.singer.color.toString(16);
        return "#" + fixed.substr(fixed.length - 6);
      } else {
        return "#ffffff";
      }
    },
    imgurl() {
      return (
        "http://y.gtimg.cn/music/photo_new/T001R300x300M000" +
        this.singermid +
        ".jpg?max_age=2592000"
      );
    },
    isDark: function() {
      var grayLevel = this.r * 0.299 + this.g * 0.587 + this.b * 0.114;
      return grayLevel < 192;
    },
    background: function() {
      return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.opacity + ')'
    },
    gradientcolor() {
      return '-webkit-linear-gradient(top, rgba(' + this.r + ',' + this.g + ',' + this.b + ', 0), ' + this.color + ')'
    },
    r: function() {
      return parseInt(this.color.slice(1, 3), 16);
    },
    g: function() {
      return parseInt(this.color.slice(3, 5), 16);
    },
    b: function() {
      return parseInt(this.color.slice(5, 7), 16);
    }
  }
};
</script>
<style lang="scss">
#singer {
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
      max-height: 68vh;
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
  .header {
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
      background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgb(135, 112, 101));
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
  }
  .list {
    background: rgb(135, 112, 101);
    z-index: 1;
    padding-bottom: 50px;
    ul {
      padding-left: 10px;
      list-style: none;
      li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        cursor: pointer;
        .music-index {
          margin-left: -50px;
          width: 50px;
          text-align: center;
        }
        .music-info {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          .music-name {
            width: 100%;
            line-height: 22px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .music-singer {
            color: #aaa;
            font-size: 14px;
            line-height: 22px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
        .action-button {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          img {
            width: 25px;
          }
        }
      }
    }
    .list-title {
        line-height: 40px;
        text-align: center;
    }
    .singer-brief {
        padding: 10px;
        font-size: 14px;
    }
  }
}
.dark {
  color: #fff !important;
}
</style>