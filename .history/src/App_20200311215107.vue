<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/goods">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import header from '@/components/header/header.vue';
import sellerData from "@/common/json/seller.js";
export default {
  name: "app",
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.seller = sellerData
    console.log(this.seller)
  },
  components:{
    'v-header':header,
  }
};
</script>

<style lang="stylus">
@import "~common/stylus/mixin.styl"
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  // border-bottom:1px solid rgba(7,17,27,.1)
  border-1px(rgba(7,17,27,.1))
  .tab-item
    flex: 1
    text-align: center
    & > a
      display: block
      font-size: 14px
      color: rgb(77,85,93)
      // a 的激活状态,样式名称与main.js配置的一致性
      &.active 
        color: rgb(240, 20, 20)
</style>