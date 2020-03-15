<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count > 0">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>
<script>
export default {
    props: {
      food: { // 传入商品
        type: Object,
      }
    },
    methods:{
        addCart(event){
            if (!event._constructed) {  // 跟goods组件一样防止在pc端执行两次
          return;
        }
        console.log(`点击了增加按钮了`);
        if (!this.food.count) { // 如果food.count不存在也就是第一次点击
          // this.food.count = 1;
          Vue.set(this.food, 'count', 1); // 新增加一个不存在的属性需要用set接口才能检测到变化
        }else {
          this.food.count++;
        }
        /* 此处派发自定义事件，触发shopcart组件里面的小球动画,并且传入当前点击的元素 */
        this.$emit('add', event.target);
        }
    }
}
</script>
<style lang="stylus">
    
</style>