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
                    {{seller.description}}/
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