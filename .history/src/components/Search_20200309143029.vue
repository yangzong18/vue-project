<template>
  <div id="search">
    <div class="search">
      <div class="search-input">
        <img src="@/assets/icon-search.png" alt="搜索" />
        <form @submit.prevent="search(key)">
          <input type="text" name id placeholder="搜索 歌曲/专辑/歌手" @focus="focus()" v-model="key" />
        </form>
      </div>
      <div ref=
        class="search-cancel"
        :class="{ 'search-cancel-show' : searchShow }"
        @click="searchCancel()"
      >取消</div>
    </div>
    <div class="hotKey" v-if="searchRes == null && searchShow">
      <div class="search-history">
        <div
          class="search-history-item"
          v-for="(item) in searchHistory"
          @click="search(item)"
        >{{item}}</div>
      </div>
      <ul>
        <li v-for="(item,index) in hotkey" @click="search(item.k)" :key="index">
          <span class="hotkey-index">{{index+1}}</span>
          <span class="hotkey-k">{{item.k}}</span>
          <span class="hotkey-n">{{item.n | listenCount}}</span>
        </li>
      </ul>
    </div>
    <div class="result" v-if="searchRes != null && searchShow">
      <div class="result-group" v-if="searchRes.song != null">
        <div class="group">
          <img class="group-img" src="@/assets/icon-music.png" alt />
          <p class="group-p">单曲</p>
        </div>
        <div class="result-item" v-for="(item,index) in searchRes.song.itemlist" :key="index">
          <p class="result-title" @click="play(index)">{{item.name}}</p>
          <p class="result-author" @click="play(index)">- {{item.singer}}</p>
          <div class="action-button" @touchend.prevent="showMenu(index)" @click="showMenu(index)">
            <img src="@/assets/icon-...black.png" />
          </div>
        </div>
      </div>
      <div class="result-group" v-if="searchRes.album != null">
        <div class="group">
          <img class="group-img" src="@/assets/icon-album.png" alt />
          <p class="group-p">专辑</p>
        </div>
        <div
          class="album-item"
          v-for="(item,index) in searchRes.album.itemlist"
          :key="index"
          @click="showAlbum(item.mid)"
        >
          <img class="album-img" v-lazy="item.pic" />
          <div class="album-info">
            <div class="album-name">{{item.name}}</div>
            <div class="album-author">{{item.singer}}</div>
          </div>
        </div>
      </div>
      <div class="result-group" v-if="searchRes.singer != null">
        <div class="group">
          <img src="@/assets/icon-singer.png" alt class="group-img" />
          <p class="group-p">歌手</p>
        </div>
        <div
          class="singer-item"
          v-for="(item,index) in searchRes.singer.itemlist"
          :key="index"
          @click="showSinger(item.mid)"
        >
          <img class="singer-img" v-lazy="item.pic" />
          <div class="singer-p">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <div class="result-group" v-if="searchRes.mv != null">
        <div class="group">
          <img src="@/assets/icon-mv.png" class="group-img" />
          <p class="group-p">MV</p>
        </div>
        <div
          class="mv-item"
          v-for="(mv,index) in searchRes.mv.itemlist"
          :key="index"
          @click="openmv(mv.vid)"
        >
          <p class="mv-name">{{mv.name}}</p>
          <p class="mv-author">{{mv.singer}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchShow: false,
      key: "",
      searchRes: null,
      searchHistory: [],
      hotkey: null,
      menus: {}
    };
  },
  methods: {
    searchCancel() {
      this.searchShow = false;
      this.key = "";
      this.searchRes = null;
      this.$emit("searchhide");
    },
    showAlbum(mid) {
      this.$router.push({
        name: "album",
        params: { id: mid }
      });
    },
    showSinger(mid) {
      this.$emit("searchhide");
      this.$router.push({
        name: "singer",
        params: { id: mid }
      });
    },
    focus() {
      this.searchShow = true;
      this.$emit("searchshow");
    },
    showMenu: function(num) {
      this.menuedIndex = num;
      let that = this;
      this.$store.dispatch("notifyActionSheet", {
        menus: {
          "title.noop":
            this.searchRes.song.itemlist[num].name +
            '<br/><span style="color:#666;font-size:12px;">' +
            this.searchRes.song.itemlist[num].singer +
            "</span>",
          playAsNext: "下一首播放",
          addToPlayList: "添加到播放列表"
        },
        handler: {
          ["cancel"]() {},
          ["playAsNext"]() {
            that.$store.commit(
              "addToPlayListAsNextPlay",
              that.searchRes.song.itemlist[that.menuedIndex]
            );
          },
          ["addToPlayList"]() {
            that.$store.commit(
              "addPlayList",
              that.searchRes.song.itemlist[that.menuedIndex]
            );
          }
        }
      });
    },
    search(key) {
      this.key = key;
      this.$store.dispatch("search", key).then(response => {
        this.searchRes = response.data.data;
        var index = this.searchHistory.indexOf(key);
        if (index !== -1) {
          this.searchHistory.splice(index, 1);
        }
        this.searchHistory.unshift(key);
        this.searchHistory = this.searchHistory.slice(0, 10);
        localStorage.searchHistory = JSON.stringify(this.searchHistory);
      });
    },
    play(index) {
      this.$store.commit("setPlayList", {
        index: index,
        list: this.searchRes.song.itemlist
      });
      this.$store.commit("play");
    },
    openmv(vid) {
      window.open("https://y.qq.com/portal/mv/v/" + vid + ".html");
    }
  },
  created() {
    if (localStorage.searchHistory) {
      this.searchHistory = JSON.parse(localStorage.searchHistory);
    }
    this.$store.dispatch("getHotKey").then(res => {
      this.hotkey = res.data.data.hotkey.slice(0, 10);
    });
  },
  computed: {
    ...mapState({
      playing: state => state.PlayService.playing
    })
  }
};
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 1;
  .search-cancel {
    height: 40px;
    width: 0;
    margin: 10px auto;
    line-height: 40px;
    overflow: hidden;
    transition: width 0.5s;
    cursor: pointer;
  }
  .search-cancel-show {
    width: 55px;
  }
  .search-input {
    width: 100%;
    background: #eee;
    border-radius: 5px;
    margin: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    img {
      height: 30px;
      width: 30px;
      display: inline-block;
      margin: 0 5px;
    }
    form,
    input {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      border: none;
      background-color: #eee;
      font-size: medium;
      flex-grow: 1;
      outline: none;
    }
  }
}
.hotKey {
  margin-top: 60px;
  margin-bottom: 50px;
  flex-direction: column;
  display: flex;
  background-color: #eee;
  ul {
    list-style: none;
    background-color: #fff;
    li {
      line-height: 40px;
      display: flex;
      flex-wrap: row;
      justify-content: space-between;
      cursor: pointer;
      padding: 0 10px;
      align-items: center;
      .hotkey-index {
        padding-right: 10px;
      }
      .hotkey-k {
        flex-grow: 1;
      }
    }
  }
  .search-history {
    padding: 0 10px;
    max-height: 66px;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    .search-history-item {
      margin: 5px;
      border: 1px solid #000;
      border-radius: 14px;
      padding: 0 3px;
      cursor: pointer;
    }
  }
}
.result {
  margin-top: 60px;
  margin-bottom: 50px;
  background: #eeeeee;
  display: flex;
  flex-direction: column;
  .result-group {
    background-color: #fff;
    .result-item {
      display: flex;
      background-color: #fff;
      border-bottom: 1px solid #eee;
      flex-direction: row;
      margin-left: 10px;
      padding-left: 10px;
      align-items: center;
      cursor: pointer;
      height: 40px;
      .result-title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .result-author {
        color: #929292;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        flex-grow: 1;
      }
      .action-button {
        width: 20px;
        height: 20px;
        padding: 10px;
        img {
          width: 20px;
        }
      }
    }
    .group {
      display: flex;
      flex-direction: row;
      height: 40px;
      align-items: flex-end;
      padding-left: 10px;
      padding-bottom: 5px;
      background-color: #eee;
      .group-img {
        width: 25px;
        height: 25px;
      }
      .group-p {
        padding-left: 10px;
      }
    }
    .album-item {
      height: 40px;
      display: flex;
      flex-direction: row;
      padding: 10px;
      cursor: pointer;
      align-items: center;
      border-bottom: #eeeeee 1px solid;
      .album-img {
        width: 40px;
        height: 40px;
        border-radius: 5px;
      }
      .album-info {
        display: flex;
        flex-direction: column;
        padding-left: 15px;
        .album-name {
          font-size: 14px;
          line-height: 20px;
        }
        .album-author {
          font-size: 12px;
          line-height: 20px;
          color: #929292;
        }
      }
    }
    .singer-item {
      height: 40px;
      display: flex;
      flex-direction: row;
      padding: 10px;
      cursor: pointer;
      border-bottom: #eeeeee 1px solid;
      align-items: center;
      .singer-img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }
      .singer-p {
        display: flex;
        padding: 3px 10px;
        flex-grow: 1;
      }
    }
    .mv-item {
      height: 40px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      cursor: pointer;
      .mv-name {
        font-size: 14px;
        line-height: 20px;
      }
      .mv-author {
        color: #929292;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
@media screen and (min-width: 68vh) {
  .search {
    width: 68vh;
  }
}
</style>