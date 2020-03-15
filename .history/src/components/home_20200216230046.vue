<template>
  <div class="home" v-if="imageInfo">
    <div class="home_center">
      <div class="home_center">
        <h1 class="title">
          {{imageInfo.title}}
          <span v-if="imageInfo.date">{{(imageInfo.date).split(' ')[0]}}</span>
          <span
            class="playpause"
            @click="playpause"
            v-if="imageInfo.musicUrl"
            :title="imageInfo.musicName"
          >
            <i class="icon-volume-medium"></i>
            {{isPlay ? '暂停' : '播放'}}
          </span>
          <p class="disc" key="disc">{{imageInfo.disc}}</p>
        </h1>
      </div>
      <div class="home_set">
          div.
      </div>
    </div>this is home
  </div>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      showHomeContent: false,
      isFullScreen: false,
      isPlay: false,
      index: 0,
      isShowAllList: false
    };
  },
  computed: {
    bingImageDisc() {
      return store.getters.getGlobalInfo.showBingImage
        ? "bing"
        : "未曾遗忘的青春";
    },
    imageInfo() {
        console.log(store.getters.getFixedImageInfo)
      return store.getters.getFixedImageInfo;
    },
    globalInfo() {
      return store.getters.getGlobalInfo;
    },
    getAudioIsPlay() {
      return store.getters.getAudioIsPlay;
    },
    isBingImage() {
      return store.getters.getGlobalInfo.showBingImage;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
.home
    position:fixed
    top:0
    left:0;
    bottom:0
    width:100%;
    display:flex
    align-items:center
    .pic_bg
      position:absolute
      top:0
      left:0;
      bottom:0
      width:100%
      right:0
      z-index:-1
    .home_center
      max-width:1240px
      border-radius:12px
      backgoround:#fff
      margin:0 auto;
      display:flex
      justify-content:center
      flex-direction: column
      .home_content
        padding: 0 20px 50px 20px
        position:relative
        .title
          font-size:22px
          color:#fff
          span
            font-size:14px
            vertical-align: bottom
            font-weight:normal
            margin-left:20px
            &.playpause
              background:#fff
              display:inline-block
              color:#F55021
              width:auto
              vertical-align:middle
              height:24px
              font-weight:600
              font-size:12px
              line-height:24px
              padding: 0 8px
              border-radius:4px
              cursor:pointer
              i{
                vertical-align:middle
                display: inline-table
                padding-bottom:2px
              }
        .disc
          font-size:14px
          color:#fff
      .home_set
        position:absolute
        right:30px
        bottom:60px
        color:$text_color
        width:auto
        font-size:0
        .set_list
          display:inline-block
          width:40px
          height:40px
          font-size:16px
          vertical-align:top
          border:2px solid #fff
          border-radius:50%
          text-align:center
          box-sizing:border-box
          margin-left:25px
          cursor:pointer
          i
            color:#fff
            vertical-align:baseline
            &.text
              display: flex
              align-items:center
              justify-content:center
              font-style:normal
              width: 100%
              height: 100%
          &.disabled
            cursor:default
            border:2px solid rgba(233,233,233,0.46)
            i
              color:rgba(233,233,233,0.46)
      .tips
        position:absolute
        right:30px
        left:30px
        bottom:0
        color:$text_color
        height:40px
        line-height:40px
        font-size:10px
        text-overflow:ellipsis
        overflow:hidden
        white-space:nowrap
        text-align: right
        a
          color:$text_color
          margin-left:10px
          text-decoration:none
      @media screen and (min-width: 992px)
        .home_content
          padding: 0 80px 50px 80px
          position:relative
</style>