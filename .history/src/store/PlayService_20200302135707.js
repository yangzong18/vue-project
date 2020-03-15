import * as def from '@/config/def';
import store from '@/store/index.js'

const player = new QMplayer();
player.on('timeupdate',function(){
  store.commit(
    ''
  )
})

export default {

}