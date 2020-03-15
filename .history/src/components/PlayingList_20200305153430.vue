<template>
    <div class="playing-list">
        <div class="title border-1px border-1px-after">
            <img :src="buttonImage">
            <p class="tittle-text">{{playModeName}} {{playList.length}}首歌曲</p>
      <p class="tittle-button" @touchend.prevent="hidePlayList" @click="hidePlayList">完成</p>
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
            playMode:state=>state.PlayService.playMode,
        })
    },
}
</script>