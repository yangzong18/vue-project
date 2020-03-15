<template>
    <div id="search">
        <div class="search">
            <div class="search-input">
            <img src="@/assets/icon-search.png" alt="搜索">
            <form>
                <input type="text" name="" id="" placeholder="搜索 歌曲/专辑/歌手">
            </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.search {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 1;
    .search-input[data-v-bba5be82] {
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
    }
}   
@media screen and (min-width: 68vh) {
    .search {
      width: 68vh;
    }
  }
</style>