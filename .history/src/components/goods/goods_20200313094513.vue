<template>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <li v-for="(item,index) in  goods" :key="index" :class="{'current':currentIndex===index}" class="menu-item" @click="selectMenu(index,event)">
                    <span class="text border-1px">
                        <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"> </span>
                        {{item.name}} 
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
            <ul>
                <li v-for="(item,index) in  goods" :key="index" class="foods-list food-list-hook">
                    <h1 class="title"> {{item.name}} </h1>
                    <ul>
                        <li v-for="(food, index) in item.foods" :key="index" class="food-item border-1px">
                            <div class="icon"> <!--商品小图标-->
                                <img width="57" height="57" :src="food.icon" alt="food.name">
                            </div>
                            <div class="content"> <!-- 商品名称和描述-->
                                <h2 class="name">{{ food.name }}</h2> <!--商品名称-->
                                <p class="desc">{{food.description}}</p> <!--描述-->
                                <div class="extra"> <!--销售-->
                                    <span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price"> <!--价格-->
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old"  v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <!-- 引入增加按钮组件  -->
                                <div class="cartcontrol-wrapper">
                                    <!-- 上面遍历的是时候顺便传递food对象  -->
                                    <cartcontrol @add="addFood" :food="food"></cartcontrol>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- <food @add="addFood" :food="selectedFood" ref="foods"></food> -->
    </div>
</template>
<script>
import BScroll from 'better-scroll'; // 导入滚动类库
import cartcontrol from '@/components/cartcontrol/cartcontrol'; // 引入增加按钮组件
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
            selectedFood: {},
            scrollY: 0, // 当期滚动的高度
        }
    },
    created(){
        this.goods = goodData;
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        this.$nextTick(() => {
            // 调用滚动的初始化方法
            this._initScroll();
            this._calculateHeight();
        });
    },
    methods:{
        addFood(target) { // 监听到的组件的事件回调
            this._drop(target);
        },
        _drop: function (target) { // 处理小球动画的方法
            this.$nextTick(() => {
                // this.$refs.shopcart.drop(target); // 访问子组件的方法
            });
        },
        _initScroll(){

        },
        _calculateHeight(){
        // 获取右侧一个商品的整个li，一个li里面包含了该分类下的所有商品
         let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
         let height = 0;
         this.listHeight.push(height);
         for (let i = 0; i < foodList.length; i++) {
           let item = foodList[i];
           height += item.clientHeight; // 获取每一个li的可视区域的高度
           this.listHeight.push(height); // 这样就得到了每一个商品分类下的所有商品对应的高度
         }
         console.log(this.listHeight)
      },

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
        selectedMenu(index,event){
            console.log(index)
        }
    },
    components:{
        cartcontrol
    }
}
</script>
<style lang="stylus">
@import "~common/stylus/mixin.styl";  
.goods {
    display :flex;
    position:absolute;
    top:174px;
    bottom :46px;
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
            &.current {
                position: relative;
                z-index: 10;
                margin-top: -1px;
                background: #fff;
                font-weight: 700;
            }
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
                    &.decrease {
                        bg-image('../../assets/img/decrease_3')
                    } 
                    &.discount {
                        bg-image('../../assets/img/discount_3')
                    }  
                    &.guarantee {
                        bg-image('../../assets/img/guarantee_3')
                    }
                    &.invoice {
                        bg-image('../../assets/img/invoice_3')
                    } 
                    &.special {
                        bg-image('../../assets/img/special_3')
                    }   
                }
            
            }
        }

    }
    .foods-wrapper {
        flex :1;
        overflow:auto;
        ul{
            li {
                list-style :none;
                .title {
                    padding-left: 14px;
                    height: 26px;
                    line-height: 26px;
                    border-left: 2px solid #d9dde1;
                    font-size: 12px;
                    color: #93999f;
                    background: #f3f5f7;
                }
                .food-item {
                    display: flex;
                    margin: 18px;
                    padding-bottom: 18px;
                    position: relative;
                    border-1px: (rgba(7, 17, 27, .1))
                    .icon {
                        flex: 0 0 57px;
                        margin-right: 10px;
                    }
                    .content {
                        flex :1;
                        .cartcontrol-wrapper {
                            position: absolute;
                            right: 0;
                            bottom: 12px;
                        }
                        .desc, .extra {
                            line-height: 10px
                            font-size: 10px
                            color: rgb(147, 153, 159)
                        } 
                        .name {
                            margin: 2px 0 8px 0;
                            height: 14px;
                            line-height: 14px;
                            font-size: 14px;
                            color: rbg(7, 17, 27);
                        }
                        .desc {
                            margin-bottom: 8px;
                            line-height: 12px;
                        }
                        .count {
                            margin-right :10px;
                        }
                        .price {
                            font-weight:700;
                            line-height :24px;
                            .now {
                                margin-right: 8px;
                                font-size: 14px;
                                color: #f01414;
                            }
                            .old {
                                text-decoration: line-through;
                                font-size: 10px;
                                color: #93999f;
                            }
                        }
                    }
                }
            }
            
        }
    }
}
</style>