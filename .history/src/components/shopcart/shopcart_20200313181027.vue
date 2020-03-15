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
        <div v-for="(ball, index) in balls" :key="index">
          <transition name="drop" @before-enter="beforeDrop" >
            <div class="ball" v-show="ball.show">
              <div class="inner inner-hook"></div>
            </div>
          </transition>
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
    props:{
        selectFoods:{
            type:Array,
            default(){
                return [
                    {
                        price:0,
                        count:0
                    }
                ]
            }
        },
        deliveryPrice:{
            type:Number,
            default:0
        },
        minPrice:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            balls: [ // 要执行动画时的显示的小球
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                }
            ],
            dropBalls: [], // 执行过后的小球
            fold: true
        }
    },
    methods:{
        drop(el) {
            // 找到所有隐藏的小球设置成true
            for (let i = 0; i < this.balls.length; i++) {
                let ball = this.balls[i];
                if (!ball.show) {
                    ball.show = true;
                    ball.el = el; // 存入当前的dom元素，以便动画函数里面使用
                    this.dropBalls.push(ball);
                    console.log('drop')
                    return;
                }
            }
            
        },
        beforeDrop(el) {
            let count = this.balls.length; // 拿到所有要做动画的小球
            let ball = this.balls[count];
            while (count--) {
                let ball = this.balls[count];
                if (ball.show) {
                    let rect = ball.el.getBoundingClientRect(); // 浏览器的接口，返回的是一个矩形的四个值
                    let x = rect.left - 32; // 减去设定的小球的位置
                    // 窗体的高度减去当前按钮的高度在减去设定的小球的高度
                    let y = -(window.innerHeight - rect.top - 22);
                    el.style.display = ''; // 显示小球
                    el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                    el.style.transform = `translate3d(0,${y}px,0)`;
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webktiTransform = `transform3d(${x}px,0,0)`;
                    inner.style.transform = `translate3d(${x}px,0,0)`;
                }
            }
        },
        dropping(el, done) { // enter 和leave中必须使用done，否则动画过渡会立即完成，就是要告诉vue什么时候动画结束了的意思
            console.log(el)
            let rf = el.offsetHeight; // 触发浏览器重绘，才能隐藏动画过后的小球
            this.$nextTick(() => {
                el.style.webkitTransform = 'translate3d(0,0,0)';
                el.style.transform = 'translate3d(0,0,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webktiTransform = 'translate3d(0,0,0)';
                inner.style.transform = 'translate3d(0,0,0)';
                el.addEventListener('transitionend', done); // transitionend css3 提供事件，监听transition的结束
            });
        },
    }
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
                text-align:center;
                &.enough {
                    background-color :#00b43c;
                    color :#fff;
                }
            }
            
        }
    }
    .ball-container {
        .ball {
            position: fixed;
            left: 32px;
            bottom: 22px;
            z-index: 200;
            transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
            .inner {
                width: 16px
                height: 16px
                border-radius: 50%
                background: rgb(0, 160, 220)
                transition: all 0.4s linear
            }
          
        }
    }
    .shopcart-list {
        position :absolute;
        top:0;
        left:0;
        z-index:-1;
        width :100%;
        transform3d(0,-100%,0);
        .list-header {
            height: 40px;
            line-height: 40px;
            padding: 0 18px;
            background: #f3f5f7;
            border-bottom: 1px solid rgba(7,17,21,0.1);
            .title {
                float: left;
                font-size: 14px;
                color: #07111b;
            }
            .empty {
                float: right;
                font-size: 12px;
                color: #00a0dc;
            }
        }
        .list-content {
            padding: 0 18px;
            max-height: 217px;
            overflow: hidden;
            background: #fff;
            .food {
                position: relative;
                padding: 12px 0;
                box-sizing: border-box;
                position: relative;
                .name {
                    line-height: 24px;
                    font-size: 14px;
                    color: #07111b;
                }
                .price {
                    position: absolute;
                    right: 90px;
                    bottom: 12px;
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #f01414;
                }
                .cartcontrol-wrapper {
                    position: absolute;
                    right: 0;
                    bottom: 6px;
                }
            }
        }
    }
    .list-mask {
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 40
        backdrop-filter: blur(10px)
        opacity: 1
        background: rgba(7, 17, 27, 0.6)
        &.fade-enter-active, &.fade-leave-active {
            transition: all 0.5s
        }
        &.fade-enter, &.fade-leave-active {
            opacity: 0
            background: rgba(7, 17, 27, 0)
        }
            
    }
}

</style>