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
        </div>
    </div>
</template>
<script>
export default {
    props:{
        seller :{
            type:Object
        }
    }
}
</script>