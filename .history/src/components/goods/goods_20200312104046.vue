<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in  goods" :key="index" :class="{'current':currentIndex===index}" class="menu-item">
                    <span class="text border-1px">
                        <span class="icon" :class="classMap[item.type]"> {{item.name}} </span>
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
    
</style>