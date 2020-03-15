<template>
    <div id="playing-list">
        <div class="title border-1px border-1px-after">
            <img :src="buttonImage">
            <p class="title-text">顺序播放 1首歌曲</p>
            <p class="title-button" @touchend.prevent="hidePlayList" @click="hidePlayList">完成</p>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import * as def from '@/config/def'
export default {
    computed:{
        buttonImage(){
            console.log(def.PLAY_MODE_IMG[this.playMode])
            return def.PLAY_MODE_IMG[this.playMode]
        },
        ...mapState({
            playList:state=>state.PlayService.playList,
            playMode:state=>state.PlayService.playMode,
        })
    },
}
</script>
<style lang="scss" scoped>
#playing-list {
    z-index: 10;
    position: absolute;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    .title {
        position: fixed;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: #fff;
        width: 100%;
        max-width: 68vh;
        z-index: 3;
        img {
            width: 25px;
            display: inline-block;
            cursor: pointer;
            padding-left: 10px;
        }
        .title-text {
            flex-grow: 
        }
    }
    
}    
@media screen and (min-width: 68vh){
    #playing-list {
        width: 68vh;
    }
}

</style>