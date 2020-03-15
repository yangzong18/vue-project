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
          <img
            class="album-img"
            src="http://imgcache.qq.com/music/photo/mid_album_58/m/P/001Qn04n29RAmP.jpg"
            lazy="loaded"
          />
          <div class="album-info">
            <div class="album-name">周笔畅</div>
            <div class="album-author">周笔畅</div>
          </div>
        </div>
        <div class="album-item">
          <img
            class="album-img"
            src="http://imgcache.qq.com/music/photo/mid_album_58/m/P/001Qn04n29RAmP.jpg"
            lazy="loaded"
          />
          <div class="album-info">
            <div class="album-name">周笔畅</div>
            <div class="album-author">周笔畅</div>
          </div>
        </div>
      </div>
      <div class="result-group">
        <div class="group">
          <img src="@/assets/icon-singer.png" alt="" class="group-img">
          <p class="group-p">歌手</p>
        </div>
        <div class="singer-item">
          <img
            
            class="singer-img"
            src="http://imgcache.qq.com/music/photo/mid_singer_58/v/b/004fe9NS41vRvb.jpg"
            lazy="loaded"
          />
          <div class="singer-p">
            <p >我们的存在</p>
          </div>
        </div>
        <div class="singer-item">
          <img
            
            class="singer-img"
            src="http://imgcache.qq.com/music/photo/mid_singer_58/3/1/002LCrTN2K0o31.jpg"
            lazy="loaded"
          />
          <div class="singer-p">
            <p >我们的幸福时光</p>
          </div>
        </div>
      </div>
      <div ="" class="result-group"><div ="" class="group"><img ="" src="data:image/png;base64,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" class="group-img"> <p ="" class="group-p">MV</p></div> <div ="" class="mv-item"><p ="" class="mv-name">我们的时光</p> <p ="" class="mv-author">TFBOYS</p></div><div ="" class="mv-item"><p ="" class="mv-name">我们的爱</p> <p ="" class="mv-author">林俊杰</p></div></div>
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
        align-items: center;
        .singer-img {
            border-radius: 50%;
            width: 40px;
            height:40px;
        }
        .singer-p {
            display: flex;
            padding: 3px 10px;
            flex-grow: 1;
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