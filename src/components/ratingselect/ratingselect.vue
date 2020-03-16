<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block positive" @click="select(2,$event)" :class="{'active':selectType === 2}">
        {{desc.all}}
        <span class="count"> {{ratings.length}} </span>
      </span>
      <span class="block positive" @click="select(0,$event)" :class="{'active':selectType === 0}">
        {{desc.positive}}
        <span class="count">{{positives.length}}</span>
      </span>
      <span class="block negative" @click="select(1,$event)" :class="{'active':selectType === 1}">
        {{desc.negative}}
        <span class="count">{{negatives.length}}</span>
      </span>
    </div>
    <div class="switch" @click="toggleContent" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有评价的内容</span>
    </div>
  </div>
</template>
<script>
const POSITIVE = 0; // 好评
const NEGATIVE = 1; // 差评
const ALL = 2; // 所有评价
export default {
    props:{
        ratings:{
            type:Array,
            default(){
                return []
            }
        },
        selectType:{
            type:Number,
            default:ALL
        },
        onlyContent:{
            type:Boolean,
            default:false
        },
        desc:{
            type:Object,
            default(){
                return {
                    all:'全部',
                    positive:'满意',
                    negative:'不满意'
                }
            }
        }
    },
    methods:{
        select(type,$e){
            this.$emit('select',type)
        },
        toggleContent(event){
            // 子组件派发事件，改变父组件（food)的 ratingType 状态
            this.$emit('toggle');
        }
    },
    computed:{
        positives(){
            return this.ratings.filter((rating)=>{
                return rating.rateType === POSITIVE
            })
        },
        negatives(){
            return this.ratings.filter((rating)=>{
                return rating.rateType === NEGATIVE
            })
        }
    }
}
</script>
<style lang="stylus">
@import '~common/stylus/mixin.styl'   
.ratingselect {
    .rating-type {
        padding:18px 0;
        margin :0 18px;
        position :relative;
        font-size:0;
        .block {
            display :inline-block;
            padding:8px 12px;
            margin-right:12px;
            ling-height :16px;
            font-size :12px;
            &.active {
                color :#fff;
            }
            &.positive {
                background-color :rgba(0,160,220,0.2);
                &.active {
                    background :rgb(0, 160, 220);
                }
            }
            &.negative {
                background: rgba(77, 85, 93, .2);
                &.active {
                    background :rgb(77, 85, 93)
                }
            }
            .count {
                font-size :8px;
                margin-left:2px;
            }
        }
    }
    .switch {
        padding:12px 18px;
        line-height :24px;
        color: rgb(147, 153, 159);
        font-size :0;
        border-bottom :1px solid rgba(7,17,27,0.1);
        &.on {
            .icon-check_circle {
                color: #00c850;
            }    
        }
        .icon-check_circle { 
            font-size:24px;
            display :inline-block;
            margin-right :4px;

        }
        .text {
            display inline-block;
            vertical-align top
            font-size :12px;
        }
    }
} 
</style>