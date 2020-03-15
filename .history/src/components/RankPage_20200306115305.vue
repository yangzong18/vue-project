<template>
  <div id="rankpage">
    <div class="singer-photo">
      <img src="@/assets/loading.svg" alt="singerphoto">
    </div>
    <div class="header-bar">
      <div class="back-button">
        <div class="back-icon">
          <img src="@/assets/icon-back.svg">
        </div>
        <div class="back-text">排行榜</div>
      </div>
    </div>
    <div id="singer-header" class="header border-1px border-1px-after">
      <div class="header-blank"></div>
      <div class="header-warp" :style="{backgroud:gradientcolor}">
        <div class="singer-info" :class="{dark:isDark}">
          <h1 class="singer-name">{{topListData.topinfo.ListName}}</h1>
          <p class="singer-fans">{{topListData.topinfo.listennum}}</p>
        </div>
        <div class="play-button" @click="play(0)">
          <img src="@/assets/icon-play.png">
        </div>
      </div>

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
      topid:this.$route.params.id
    }
  },
  created(){
    this.$store.dispatch('getRankSongs',this.topid).then((response) => {
      this.topListData = response.data
      console.log(this.topListData.topinfo)
    })
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
    isDark: function () {
      var grayLevel = this.r * 0.299 + this.g * 0.587 + this.b * 0.114
      return (grayLevel < 192)
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



}  
</style>