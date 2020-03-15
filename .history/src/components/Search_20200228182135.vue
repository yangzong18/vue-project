<template>
  <div id="search">
    <div class="search">
      <div class="search-input">
        <img src="@/assets/icon-search.png" alt="搜索" />
        <form @submit.prevent="search(key)">
          <input type="text" name id placeholder="搜索 歌曲/专辑/歌手" @focus="focus()" v-model="key" />
        </form>
      </div>
      <div
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
        <li v-for="(item,index) in hotkey" @click="search(item.k)">
          <span class="hotkey-index">{{index+1}}</span>
          <span class="hotkey-k">{{item.k}}</span>
          <span class="hotkey-n">{{item.n | searchVol}}</span>
        </li>
      </ul>
    </div>
    <div class="result">
      <div class="result-group">
        <div class="group">
          <img class="group-img" src="@/assets/icon-music.png" alt />
          <p class="group-p">单曲</p>
        </div>
        <div class="result-item">
          <p class="result-title">星辰大海</p>
          <p class="result-author">-周冬雨/王俊凯/易烊千玺/刘昊然</p>
          <div class="action-button">
            <img src="./../assets/icon-...black.png" />
          </div>
        </div>
        <div class="result-item">
          <p class="result-title">星辰大海</p>
          <p class="result-author">-周冬雨/王俊凯/易烊千玺/刘昊然</p>
          <div class="action-button">
            <img src="./../assets/icon-...black.png" />
          </div>
        </div>
        <div class="result-item">
          <p class="result-title">星辰大海</p>
          <p class="result-author">-周冬雨/王俊凯/易烊千玺/刘昊然</p>
          <div class="action-button">
            <img src="./../assets/icon-...black.png" />
          </div>
        </div>
        <div class="result-item">
          <p class="result-title">星辰大海</p>
          <p class="result-author">-周冬雨/王俊凯/易烊千玺/刘昊然</p>
          <div class="action-button">
            <img src="./../assets/icon-...black.png" />
          </div>
        </div>
      </div>
      <div class="result-group">
        <div class="group">
          <img class="group-img" src="@/assets/icon-album.png" alt />
          <p class="group-p">专辑</p>
        </div>
        <div class="album-item">
            <img class="album-img" src="http://imgcache.qq.com/music/photo/mid_album_58/m/P/001Qn04n29RAmP.jpg" lazy="loaded">
            <div class="album-info">
                <div class="album-name">周笔畅</div>
                <div class="album-author">周笔畅</div>
            </div>
        </div>
        <div class="album-item">
            <img class="album-img" src="http://imgcache.qq.com/music/photo/mid_album_58/m/P/001Qn04n29RAmP.jpg" lazy="loaded">
            <div class="album-info">
                <div class="album-name">周笔畅</div>
                <div class="album-author">周笔畅</div>
            </div>
        </div>
      </div>
      <div data-v-bba5be82="" class="result-group"><div data-v-bba5be82="" class="group"><img data-v-bba5be82="" src="data:image/png;base64,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" class="group-img"> <p data-v-bba5be82="" class="group-p">歌手</p></div> <div data-v-bba5be82="" class="singer-item"><img data-v-bba5be82="" class="singer-img" src="http://imgcache.qq.com/music/photo/mid_singer_58/v/b/004fe9NS41vRvb.jpg" lazy="loaded"> <div data-v-bba5be82="" class="singer-p"><p data-v-bba5be82="">我们的存在</p></div></div><div data-v-bba5be82="" class="singer-item"><img data-v-bba5be82="" class="singer-img" src="http://imgcache.qq.com/music/photo/mid_singer_58/3/1/002LCrTN2K0o31.jpg" lazy="loaded"> <div data-v-bba5be82="" class="singer-p"><p data-v-bba5be82="">我们的幸福时光</p></div></div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchShow: false,
      key: "",
      searchRes: null,
      searchHistory: [],
      hotkey: null
    };
  },
  filters: {
    searchVol: num => `${Math.round(num / 1000) / 10}万`
  },
  methods: {
    searchCancel() {
      this.searchShow = false;
      this.key = "";
      this.searchRes = null;
    },
    focus() {
      this.searchShow = true;
    },
    search(key) {
      this.key = key;
      this.$store.dispatch("search", key).then(response => {
        this.searchRes = response.data;
        var index = this.searchHistory.indexOf(key);
        if (index !== -1) {
          this.searchHistory.splice(index, 1);
        }
        this.searchHistory.unshift(key);
        this.searchHistory = this.searchHistory.slice(0, 10);
        localStorage.searchHistory = JSON.stringify(this.searchHistory);
      });
    }
  },
  created() {
    if (localStorage.searchHistory) {
      this.searchHistory = JSON.parse(localStorage.searchHistory);
    }
    this.$store.dispatch("getHotKey").then(res => {
      this.hotkey = res.data.data.hotkey.slice(0, 10);
    });
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
        .album-img {
            width: 40px;
            height: 40px;
            border-radius: 5px;
        }
        .album-info {
            display: flex;
            flex-direction: column;
            padding-left:15px;
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
  }
}
@media screen and (min-width: 68vh) {
  .search {
    width: 68vh;
  }
}
</style>