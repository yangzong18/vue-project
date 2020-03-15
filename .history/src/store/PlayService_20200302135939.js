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

player.on(;ended)

export default {

}