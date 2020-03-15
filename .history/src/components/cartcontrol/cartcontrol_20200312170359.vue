<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count > 0">
                <span class="inner icon-remove_circle_outline"></span>
            </div>
        </transition>
        <div class="cart-add icon-add_circle"></div>
    </div>
</template>
<script>
export default {
    props: {
      food: { // 传入商品
        type: Object,
      }
    },
}
</script>
<style lang="stylus">
    
</style>