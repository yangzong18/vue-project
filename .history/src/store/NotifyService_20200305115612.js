/**
 * Created by sioxa on 2016/12/29 0029.
 */
import Rx from 'rxjs/Rx'

export default {
  state: {
    actionSheet: {
      show: false,
      menus: {},
      subject: null
    },
    playingList:{
      show:false
    }
  },
  actions: {
    notifyActionSheet({commit, state}, options){
      commit('showActionSheet', options.menus)
    },
    responceFromActionSheet({state}, menu){
      state.actionSheet.subject.next(menu)
      state.actionSheet.subject.complete()
    }
  },
  mutations: {
    showActionSheet(state, menus){
      state.actionSheet.menus = menus
      state.actionSheet.show = true
    },
    closeActionSheet(state){
      state.actionSheet.show = false
    },
    showPlayingList(state){
      state.playingList.show=true
    },
    closePlayingList(state){
      state.playingList.show=false
    }
  }
}
