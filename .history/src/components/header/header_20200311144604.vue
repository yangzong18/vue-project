<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" v-lazy="seller.avatar" alt="avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name"> {{seller.name}} </span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support">
                    <span class="icon" v-bind:class="classMap[ seller.supports[0].type ]"></span>
                    <!-- 获取优惠的第一条数据 -->
                    <span class="text">{{ seller.supports[0].description }}</span>
                </div>
            </div>
            <!--右边的活动个数按钮-->
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{ seller.supports.length }}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <!--底部公告-->
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>      
    </div>
    <!--头部背景图-->
    <div class="background">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!--公告弹层-->
    <transition name="fade">
      <div v-show="detailShow" class="detail" @click="hideDetail">
        <!--这里开始经典的 sticky footer 布局 -->
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
          <!--公告标题-->
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <v-line text="优惠信息"></v-line>
          <!--弹层的优惠信息列表-->
          <ul v-if="seller.supports" class="supports">
            <li class="supports-item" v-for="(item, index) in seller.supports" :key="index">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{ seller.supports[index].description }}</span>
            </li>
          </ul>
          <v-line text="商家公告"></v-line>
          <div class="bulletin">
            <p class="content">{{ seller.bulletin }}</p>
          </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
        </transition>
    </div>
</template>
<script>
import star from '@/components/star/star';
import line from '@/components/line/line';
export default {
    data() {
        return {
            detailShow: false // 控制弹层的显示
        }
    },
    props:{
        seller :{
            type:Object
        }
    },
    methods:{
        showDetail: function() { // 显示隐公告层
            this.detailShow = true;
        },
        hideDetail: function() { // 隐藏公告层
            this.detailShow = false;
        }
    },
    created() {
      // 这里样式名称的是根据supports的type来的
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
}
</script>
<style lang="stylus"> 
@import "~common/stylus/mixin";
 .header
    position :relative;
    overflow:hidden;
    color:#fff;
    background :rgba(7,17,27,.5);
    .content-wrapper
        position relative;
        padding 24px 12px 18px 24px
        font-size 0
        .avatar
            display inline-block
            vertical-align top
            img 
                border-radius 2px
        .content
            display inline-block
            margin-left 16px
            .title  
                margin 2px 0 8px 0
                .brand
                    display: inline-block
                    width: 30px
                    height: 18px
                    bg-image('brand')
                    background-size: 30px 18px
                    background-repeat: no-repeat
                    vertical-align: top
                .name
                    margin-left: 6px
                    font-size: 16px
                    line-height: 18px
                    font-weight: bold
            .description
                margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
                

    
</style>