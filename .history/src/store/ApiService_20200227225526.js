/**
 * Created by sioxa on 2016/12/25 0025.
 */
import Vue from 'vue'

import fecth from '@/utils/fecth.js'
import API from '../config/api'

export default {
  actions: {
    getRankSongs({}, id){
      return apiFactory(API.rank_songs)(id)
    },
    getRankList({}){
      return apiFactory(API.rank_list)()
    },
    getAlbum({}, id){
      return apiFactory(API.album)(id)
    },
    getSingerInfo({}, id){
      return apiFactory(API.singer_info)(id)
    },
    search({}, key){
      let params = {
        key: key,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      }
      return fecth.get(`api/splcloud/fcgi-bin/smartbox_new.fcg`,params)
    },
    getHotKey({}){
      url: 'api/splcloud/fcgi-bin/gethotkey.fcg',
      let params = {
              g_tk: 5381,
              loginUin: 0,
              hostUin: 0,
              format: 'jsonp',
              inCharset: 'utf8',
              outCharset: 'utf-8',
              notice: 0,
              platform: 'yqq',
              needNewCode: 0
        },
      return fecth.get(`api/splcloud/fcgi-bin/gethotkey.fcg`,params)
    },
    getRecommands({}){
      return apiFactory(API.first_page_data)()
    },
    getCdList({},id){
      return apiFactory(API.cd)(id)
    },
    getLyric({},id){
      return Vue.http.jsonp('https://api.darlin.me/music/lyric/'+id+'/',{
        jsonp:'callback'
      })
    }
  }
}
