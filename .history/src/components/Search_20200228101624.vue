<template>
  <div id="search">
    <div class="search">
      <div class="search-input">
        <img src="@/assets/icon-search.png" alt="搜索" />
        <form @submit.prevent="search(key)">
          <input type="text" name id placeholder="搜索 歌曲/专辑/歌手" @focus="focus()" v-model="key"/>
        </form>
      </div>
      <div
        class="search-cancel"
        :class="{ 'search-cancel-show' : searchShow }"
        @click="searchCancel()"
      >取消</div>
    </div>
    <div class="hotKey" v-if="searchres !== null && searchShow">
      <div class="search-history">
        <div class="search-history-item" v-for="(item,index) in searchHistory">{{}}</div>
        <div class="search-history-item">周杰伦</div>
      </div>
      <ul>
        <li>
          <span class="hotkey-index">1</span>
          <span class="hotkey-k">我们的歌</span>
          <span class="hotkey-n">76.6万</span>
        </li>
        <li>
          <span class="hotkey-index">2</span>
          <span class="hotkey-k">冰雪奇缘2</span>
          <span class="hotkey-n">58.7万</span>
        </li>
        <li>
          <span class="hotkey-index">3</span>
          <span class="hotkey-k">张杰</span>
          <span class="hotkey-n">32.4万</span>
        </li>
        <li>
          <span class="hotkey-index">4</span>
          <span class="hotkey-k">桥边姑娘</span>
          <span class="hotkey-n">28.8万</span>
        </li>
        <li>
          <span class="hotkey-index">5</span>
          <span class="hotkey-k">星辰大海</span>
          <span class="hotkey-n">20.3万</span>
        </li>
      </ul>
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
    };
  },
  methods: {
    searchCancel() {
      this.searchShow = false;
    },
    focus() {
      this.searchShow = true;
    },
    search(key){
        this.key = key
        this.$store.dispatch('search', key).then((response) => {
          this.searchRes = response.data
          var index = this.searchHistory.indexOf(key)
          if (index !== -1) {
            this.searchHistory.splice(index, 1)
          }
          this.searchHistory.unshift(key)
          this.searchHistory = this.searchHistory.slice(0, 10)
          localStorage.searchHistory = JSON.stringify(this.searchHistory)
        })
    }
  },
  created(){
      if(localStorage.searchHistory){
          this.searchHistory = JSON.parse(localStorage.searchHistory)
      }
      this.$store.dispatch('getHotKey').then((res)=>{
          this.searchHistory = res.data.data.hotkey.slice(0,10)
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
    transition: width 1s;
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
          align-items:center;
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
@media screen and (min-width: 68vh) {
  .search {
    width: 68vh;
  }
}
</style>