<template>
    <div class="loader" v-show="isshow" :style="{backgroundColor:loaderbackgroud}">
        
    </div>
</template>
<script>
export default {
    props:{
        loaderwidth:{
            default:'40px'
        },
        loadergroud:{
            default:'#2a323b'
        },
        topbottomcolor:{
            default:'#545a6a'
        },
        leftrightcolor: {
            default: '#d4d4db'
        },
        borderopacity: {
            default: '0.5'
        },
        borderduration: {
            default: '0.8s'
        },
        isshow: {
            default: true
        }
    }
}
</script>
style