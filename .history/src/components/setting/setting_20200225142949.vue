<template>
    <div class="setting">
        <div class="setting-warpper g-content">
            <h3 class="title">设置</h3>
            <div class="set-list border-1px">
                <span class="name"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">
@import '../../common/stylus/global.styl'
@import '../../common/stylus/style.styl'
@import '../../common/stylus/border-1px/index.styl'
.setting 
    position:fixed;
    left:0;
    top:0;
    right:0;
    width:100%;
    bottom:0;
    color :#fff;
    .setting-warpper 
        left :50%;
        max-width :1024px;
        width:100%;
        margin :0 auto;
        padding:15px;

</style>