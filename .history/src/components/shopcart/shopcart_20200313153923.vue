<template>
  <div>
    <div class="shopcart">
      <div class="content">
        <div class="content-left">
          <div class="logo-wrapper">
            <div class="logo">
              <i class="icon-shopping_cart"></i>
            </div>
            <div class="num" style="display: none;">0</div>
          </div>
          <div class="price">￥0元</div>
          <div class="desc">另需配送费￥4元</div>
        </div>
        <div class="content-right">
          <div class="pay enough">￥20元起送</div>
        </div>
      </div>
      <div class="ball-container">
        <div>
          <div class="ball" style="display: none;">
            <div class="inner inner-hook"></div>
          </div>
        </div>
        <div>
          <div class="ball" style="display: none;">
            <div class="inner inner-hook"></div>
          </div>
        </div>
        <div>
          <div class="ball" style="display: none;">
            <div class="inner inner-hook"></div>
          </div>
        </div>
        <div>
          <div class="ball" style="display: none;">
            <div class="inner inner-hook"></div>
          </div>
        </div>
        <div>
          <div class="ball" style="display: none;">
            <div class="inner inner-hook"></div>
          </div>
        </div>
      </div>
      <div class="shopcart-list" style="display: none;">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty">清空</span>
        </div>
        <div class="list-content">
          <ul></ul>
        </div>
      </div>
    </div>
    <div class="list-mask" style="display: none;"></div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
@import "~common/stylus/mixin.styl";    
.shopcart {
    position :fixed;
    left:0;
    bottom :0;
    z-index:50;
    width :100%;
    height:48px;
    .content {
        display :flex;
        background-color :#141d27;
        font-size:0;
        color: rgba(255,255,255,0.4);
        .content-left {
            flex:1;
            .logo-wrapper

        }
        .content-right {
            flex:0 0 105px;
            width 105px;
        }
    }
}
</style>