<template>
    <div class="playing-list">
        <div class="title border-1px border-1px-after">
            <img :src="buttonImage">
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
import * as def from '@/config/def'
export default {
    computed:{
        buttonImage{
            return def.PLAY_MODE_IMG[this.playMode]
        },
        ...mapGetters({
            playMode:state=>state.PlayService.playMode,
        })
    },
}
</script>