<template>
  <div id="search">
    <div class="search">
      <div class="search-input">
        <img src="@/assets/icon-search.png" alt="搜索" />
        <form>
          <input type="text" name id placeholder="搜索 歌曲/专辑/歌手" @focus="focus()" />
        </form>
      </div>
      <div class="search-cancel" :class="{ 'search-cancel-show' : searchShow }" @click="searchCancel()">取消</div>
    </div>
    <div class="hotKey">
        <div class="search-history">
            <div class="search-history-item"></div>
        </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchShow: false,
      key: ""
    };
  },
  methods: {
    searchCancel() {
      this.searchShow = false;
    },
    focus() {
      this.searchShow = true;
    }
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
  }
  .search-cancel-show{
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
@media screen and (min-width: 68vh) {
  .search {
    width: 68vh;
  }
}
</style>