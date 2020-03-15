<template>
    <div class="setting">
        <div class="setting-warpper g-content">
            <h3 class="title">设置</h3>
            <div class="set-list border-1px">
                <span class="name">背景图片</span>
                <div class="switch_bg switch-right">
                    <div class="title">bing壁纸</div>
                </div>
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
        .setting_list 
            padding:10px 0;
            color :#fff;
            font-size :0;
            &.border-1px
					border-1px($border_bottom_color_deep, bottom)
            .name
                font-size :14px;
                display:inline-block;
                vertical-align :middle;
                width :calc(100% - 150px);
            .switch-right 
                float:right;
                display:inline-block;
                font-size :0;

        .setting_list.border-1px 
            position:relative;

</style>