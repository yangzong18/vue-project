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
      <div class="header-warp" :style="backgroud:">

      </div>

    </div>
  </div>
</template>
<script>
export default {
  computed:{
    gradientcolor: function () {
      return '-webkit-linear-gradient(top, rgba(' + this.r + ',' + this.g + ',' + this.b + ', 0), ' + this.color + ')'
    },

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