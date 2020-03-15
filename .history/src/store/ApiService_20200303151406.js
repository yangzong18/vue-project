/**
 * Created by sioxa on 2016/12/25 0025.
 */
import Vue from 'vue'

import fecth from '@/utils/fecth.js'
import API from '../config/api'

export default {
  actions: {
    getRankSongs({}, id){
      let params = {
        g_tk: 5381,
        uin: 0,
        format: 'json',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'h5',
        needNewCode: 1,
        tpl: 3,
        page: 'detail',
        type: 'top',
        topid: id,
        _: new Date().getTime()
    };
      return fecth.get(`api/v8/fcg-bin/fcg_v8_toplist_cp.fcg`,params)
    },
    getRankList({}){
      let params = {
              format: 'json',
              g_tk: 5381,
              uin: 0,
              inCharset: 'utf-8',
              outCharset: 'utf-8',
              notice: 0,
              platform: 'h5',
              needNewCode: 1,
              _: new Date().getTime()
      };
      return fecth.get(`api/v8/fcg-bin/fcg_myqq_toplist.fcg`,params)
    },
    getAlbum({}, id){
      let params = {
          albummid: id,
          g_tk: 5381,
          loginUin: 0,
          hostUin: 0,
          format: 'jsonp',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
      };
      return fecth.get(`api/v8/fcg-bin/fcg_v8_album_info_cp.fcg`,params)
    },
    getSingerInfo({}, id){
      let params = 
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
      let params = {
              g_tk: 5381,
              loginUin: 0,
              hostUin: 0,
              format: 'json',
              inCharset: 'utf8',
              outCharset: 'utf-8',
              notice: 0,
              platform: 'yqq',
              needNewCode: 0
        }
      return fecth.get(`api/splcloud/fcgi-bin/gethotkey.fcg`,params)
    },
    getRecommands({}){
      return apiFactory(API.first_page_data)()
    },
    getCdList({},id){
      return apiFactory(API.cd)(id)
    },
    getLyric({},id){
      return fecth.get(`darlin/music/lyric/${id}/`)
    }
  }
}
