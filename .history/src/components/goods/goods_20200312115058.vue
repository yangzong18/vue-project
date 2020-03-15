<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in  goods" :key="index" :class="{'current':currentIndex===index}" class="menu-item">
                    <span class="text border-1px">
                        <span class="icon" v-show="" :class="classMap[item.type]"> </span>
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

        }
    },
    created(){
        this.goods = goodData;
        console.log(this.goods)
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

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
            }
        }

    }
}
</style>