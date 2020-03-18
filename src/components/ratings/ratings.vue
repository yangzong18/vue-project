<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score"> {{seller.score}} </h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 {{seller.rankRate}}% </div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery"> {{seller.deliveryTime}} 分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect @select="selectRating" @toggle="toggleContent" :select-type="selectType" :onlyContent="onlyContent" :ratings="ratings"></ratingselect> <!--使用评价组件-->
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(item,index) in ratings" :key="index" v-show="needShow(item.rateType, item.text)">
            <div class="avatar">
              <img width="28" height="28" v-lazy="item.avatar">
            </div>
            <div class="content">
              <h1 class="name"> {{item.username}} </h1>
              <div class="star-wrapper">
                <star :size="24" :score="item.score"></star>
                <span class="delivery" v-show="item.deliveryTime"> {{item.deliveryTime}} </span>
              </div>
              <p class="text"> {{item.text}} </p>
              <div class="recommend" v-show="item.recommend && item.recommend.length > 0">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="(food,key) in item.recommend" :key="key"> {{food}} </span>
              </div>
              <div class="time"> {{item.rateTime | formatDate}} </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import split from '@/components/split/split'
import ratingselect from '@/components/ratingselect/ratingselect'
import star from '@/components/star/star'

import ratingsData from 'common/json/ratings.js';
const ALL = 2; // 所有评价
export default {
    props:{
        seller:{
            type:Object
        }
    },
    data() {
        return {
            ratings:[],
            selectType:ALL,
            onlyContent:true,
        }
    },
    created(){
        this.ratings = ratingsData
    },
    methods:{
        toggleContent(){
            this.onlyContent = !this.onlyContent
        },
        selectRating(type){
            this.selectType = type
        },
        needShow(type,text){
            if (this.onlyContent && !text) { // 如果需要显示有内容，并且内容为空则返回
                return false;
            }
            if (this.selectType === ALL) {
                return true;
            } else {
                return type === this.selectType;
            }
        } 
    },
    components:{
        split,
        ratingselect,
        star
    }
};
</script>
<style lang="stylus">
@import "~common/stylus/mixin";
.ratings {
    position :absolute;
    top:174px;
    bottom:0;
    left:0;
    width:100%;
    color:#07111b;
    .overview {
        display:flex;
        padding:18px 0;
        .overview-left {
            flex:0 0 137px;
            padding:6px 0;
            width:137px;
            text-align:center;
            border-right:1px solid rgba(7,17,27,0.1);
            .score {
                margin-bottom:6px;
                line-height:28px;
                font-size:24px;
                color:#f90;
            }
            .title {
                margin-bottom:8px;
                line-height:12px;
                color:#07111b;
                font-size:12px;
            }
            .rank {
                line-height:10px;
                font-size:10px;
                color:#93999f;
            }
        }
        .overview-right {
            padding:6px 0 6px 24px;
            flex:1;
            .score-wrapper {
                margin-bottom:8px;
                font-size:0;
                .title {
                    font-size:12px;
                    line-height:18px;
                    margin-bottom:8px;
                }
                .star {
                    display:inline-block;
                    vertical-align:top;
                    margin:0 12px;
                }
            }
            .delivery-wrapper {
                .title {
                    line-height:18px;
                    font-size:12px;
                }
                .delivery {
                    font-size:12px;
                    margin:0 12px;
                    color:#93999f;
                }
            }
        }
    }
    .rating-wrapper {
        padding:0 18px;
        .rating-item {
            display :flex;
            padding:18px 0;
            position relative;
            .avatar {
                flex:0 0 28px;
                width 28px;
                margin-right 12px;
                img {
                    border-radius:50%;
                }
            }
            .content {
                position relative;
                flex:1;
                font-size 10px
                .name {
                    margin-bottom 4px;
                    line-height 12px;
                }
                .star-wrapper {
                    margin-bottom 6px;
                    .star {
                        display inline-block
                        margin-right 6px
                        vertical-align top
                    }
                    .delivery {
                        display inline-block
                        vertical-align top
                        line-height 12px
                        color #93999f
                    }
                }
                .text {
                    margin-bottom 8px
                    line-height 18px
                    font-size 12px
                }
                .recommend {
                    line-height 16px
                    .icon-thumb_up,.item {
                        display inline-block
                        margin 0 8px 4px 0
                        font-size 9px
                    }
                    .icon-thumb_up {
                        color #00a0dc
                    }
                    .item {
                        padding 6px
                        border 1px solid rgba(7,17,27,0.1)
                        color #93999f
                    }
                }
                .time {
                    position absolute
                    top 0
                    right 0
                    font-size 12px
                    line-height 12px
                }
            }
        }

    }
}
</style>