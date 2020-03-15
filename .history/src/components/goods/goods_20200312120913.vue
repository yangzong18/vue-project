<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in  goods" :key="index" :class="{'current':currentIndex===index}" class="menu-item">
                    <span class="text border-1px">
                        <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"> </span>
                        {{item.name}} 
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import goodData from '@/common/json/goods.js'; // 引入模拟的商品信息文件
export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
        return {
            goods:[],
            listHeight: [],

        }
    },
    created(){
        this.goods = goodData;
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

    },
    computed:{
        currentIndex() { // 计算当前右侧的距离，决定决定左侧哪一个分类高亮（选中的意思）
        for (let i = 0; i < this.listHeight.length; i++) {
          // 这两个高度就是一个li从上到下整个的高度
          let height1 = this.listHeight[i]; // 获取当前的上高度
          let height2 = this.listHeight[i + 1]; // 获取当前的下高度
          // if (this.scrollY > height1 && this.scrollY < height2)  这样子height2会超出listHeight的索引，需要加一个条件
          console.log('y:' + this.scrollY);
          console.log(height1 + '....' + height2);
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i; // 返回当前索引
          }
        }
        return 0; // 如果什么的都没有就返回 0
      },
    }
}
</script>
<style lang="stylus">
@import "~common/stylus/mixin.styl";  
.goods {
    display :flex;
    position:absolute;
    top:174px;
    // bottom :46px;
    .menu-wrapper {
        flex :0 0 80px;
        background: #f3f5f7;
        width :80px;
        .menu-item {
            display :table;
            width 56px;
            height:54px;
            padding: 0 12px;
            line-height 14px;
            .text {
                display table-cell;
                width 56px;
                vertical-align middle;
                position relative;
                font-size:12px;
                .icon {
                    display: inline-block
                    width: 16px
                    height: 16px
                    vertical-align: top
                    margin-right: 2px
                    background-size: 16px 16px
                    background-repeat: no-repeat
                    &.decrease // 减
              bg-image('decrease_3')
            &.discount // 折
              bg-image('discount_3')
            &.guarantee // 套餐
              bg-image('guarantee_3')
            &.invoice // 票
              bg-image('invoice_3')
            &.special // 保
              bg-image('special_3')
                }
            
            }
        }

    }
}
</style>