<template>
    <div class="music_sheet">
        <div class="list_cntent_info">
            <div class="music_list_title border-1px">
                <span class="music_index"></span>
                <span class="music_name">歌曲</span>
                <span class="music_singer">歌手</span>
                <span class="music_zhuanji">专辑</span>
                <span class="music_duration">时长</span>
            </div>
        </div>
    </div>
</template>
<script>
import store from '@/store'
export default {
    name:'music_sheet',
    data() {
        return {
            
        }
    },
}
</script>
<style lang="stylus">
@import '~common/stylus/border-1px/index';
@import '~common/stylus/global'
</style>