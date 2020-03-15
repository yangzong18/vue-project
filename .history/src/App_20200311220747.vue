<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商品</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
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
  border-1px(rgba(7,17,27,.1))
  .tab-item
    flex: 1
    text-align: center
    & > a
      display: block
      font-size: 14px
      color: rgb(77,85,93)
      &.active 
        color: rgb(240, 20, 20)
</style>