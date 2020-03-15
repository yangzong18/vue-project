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
            .logo-wrapper {
                display: inline-block;
                position: relative;
                top: -10px;
                margin: 0 12px;
                padding: 6px;
                width: 56px;
                height: 56px;
                box-sizing: border-box;
                vertical-align: top;
                border-radius: 50%;
                background: #141d27;
                .logo{
                    text-align :center;
                    background: #2b343c;
                    border-radius:50%;
                    &.highlight {
                        background: #00a0dc;
                    }
                    .num {
                        position :absolute;
                        top:0;
                        right:0;
                        width :24px;
                        height:16px;
                        line-height :16px;
                        text-align:center;
                        font-size:9px;
                        font-weight: 700;
                        color: #fff;
                        background: #f01414;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
                    }
                    .icon-shopping_cart {
                        line-height: 44px;
                        font-size: 24px;
                        color: #80858a;
                    }
                }
                
            }
            .price {
                display :inline-block;
                vertical-align :top;
                font-size :16px;
                line-height :24px;
                font-weight:700;
                margin-top: 12px;
                box-sizing: border-box;
                border-right: 1px solid rgba(225,255,255,0.1);
                padding-right:12px;
            }
            .desc {
                display :inline-block;
                vertical-align :top;
                margin :12px 0 0 12px;
                line-height :24px;
                font-size :10px;
            }

        }
        .content-right {
            flex:0 0 105px;
            width 105px;
            .pay {
                height:48px;
                line-height:48px;
                font-size :12px;
                font-weight:700;
                background: #23333b;
                text-alig
                &.enough {
                    background-color :#00b43c;
                    color :#fff;
                }
            }
            
        }
    }
}
</style>