/**
 * Created by sioxa on 2016/12/25 0025.
 */
import Vue from 'vue'

import fecth from '@/utils/fecth.js'

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
          format: 'json',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
      };
      return fecth.get(`api/v8/fcg-bin/fcg_v8_album_info_cp.fcg`,params)
    },
    getSingerInfo({}, id){
      let params = {
          order: 'listen',
          begin: 0,
          num: 8,
          singermid: id,
          g_tk: 5381,
          uin: 0,
          format: 'json',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5page',
          needNewCode: 1,
          from: 'h5',
          _: new Date().getTime()
      };
      return fetch.get(`api/v8/fcg-bin/fcg_v8_singer_track_cp.fcg`,params)
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
      let params = {
          format: 'json',
          tpl: 'v12',
          page: 'other',
          rnd: 0,
          g_tk: new Date().getTime(),
          loginUin: 0,
          hostUin: 0,
          inCharset: 'utf8',
          outCharset: 'GB2312',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        };
        return fecth.get(`api/v8/fcg-bin/fcg_first_yqq.fcg`,params)
    },
    getCdList({},id){
      let params = {
          type: 1,
          json: 1,
          utf8: 1,
          onlysong: 0,
          disstid: id,
          format: 'jsonp',
          g_tk: 5381,
          loginUin: 0,
          hostUin: 0,
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
      };
      return fecth.get(`api/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg`,params)
    },
    getLyric({},id){
      return fecth.get(`darlin/music/lyric/${id}/`)
    }
  }
}
