<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" v-lazy="seller.avatar" alt="avatar">
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