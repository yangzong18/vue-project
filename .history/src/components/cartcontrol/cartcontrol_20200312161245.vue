<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count > 0">
                <span class="inner icon"></span>
            </div>
        </transition>
    </div>
</template>