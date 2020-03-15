import * as def from '@/config/def';
import store from '@/store/index.js'

const player = new QMplayer();
player.on('timeupdate',function(){
  store.commit(
    'updateCurrentTime',
    parseInt(player.currentTime)
  );
  store.commit(
    'updateDuration',
    parseInt(player.Duration)
  )
})

player.on('ended',function(){
  store.commit('playContinue')
})

export default {
  state:{
    playing:false,
    currentTime:0,
    duration:0,
    playMode:def.SEQUENTIAL,
    index:0,
    song:{
      name:def.DEFAULT_SONG_NAME
    },
    playList:[]
  },
  mutations:{
    playIndex(state,index){
      state.index = index;
      state.song = state.playList[index]
    },
    setPlayList(state,playList){
      state.playList = playList.list;
      
    }
  }
}