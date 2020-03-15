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
        loadergroud
    }
}
</script>