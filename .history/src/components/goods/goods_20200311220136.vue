<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(good,index) in  goods" :key="index" :class="{'current':currentIndex===index}" class="menu-item">
                    <span class="text border-1px">
                        <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import goodData from 'common/json/goods.js'; // 引入模拟的商品信息文件
export default {
    data() {
        return {
            goods:[],

        }
    },
    created(){
        this.goods = goodData;

    }
}
</script>