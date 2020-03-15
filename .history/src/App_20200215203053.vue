<template>
  <div class="app" @resize="isApp">
    <loader :isshow="getShowLoading" loaderbackground="rgba(0,0,0,0.3)"></loader>
    <div class="maincontent">
      <fixed-bg
        v-if="imageInfo.url && imageSetting"
        :imagepath="imageInfo.url"
        :maskcolor="getGlobalStyle.contentInfo.bgcolor"
        :maskopacity="getGlobalStyle.contentInfo.opacity"
        :masktype="getGlobalStyle.contentInfo.type"
        :maskglobainfo="getGlobalStyle"
      ></fixed-bg>
    </div>
    <v-content></v-content>
  </div>
</template>
<script>
import fixedbg from "@/components/common/fixedbg/fixedbg.vue";
import loader from "@/components/common/loader/loader.vue";
import content from '@/components/common/content/content.vue'
import store from "@/store";
import DGlobal from "@/common/js/global.js";
import API from '@/config/api'
// 引入背景请求的api
import { getBingInfo, getMineBgByIndex } from "@/common/api/background.js";
export default {
  name: "app",
  data() {
    return {
      isgetimagebybing: store.getters.getShowBingImage
    };
  },
  components: {
    "v-content":content,
    "fixed-bg": fixedbg,
    loader
  },
  mounted() {
    // 输出信息
    DGlobal.utils.setConsole("基于vue2.0的网站新版更新", 1, "walker");
    // 是否小于768
    this.isApp();
    // 加载数据
    this.fetchData();
    // 挂载 onresize事件
    window.onresize = () => {
      this.isApp();
    };
    localStorage.setItem("globalInfo",JSON.stringify(store.getters.getGlobalInfo));
  },
  methods: {
    isApp() {
      let isTrue = false;
      if (document.body.clientWidth < 768) {
        isTrue = false;
      } else {
        isTrue = true;
      }
      store.commit({
        type: "setIsHigher768",
        data: isTrue
      });
      console.log(isTrue);
    },
    fetchData() {
      // 是否需要获取壁纸信息
      const isShowBingImage = store.getters.getGlobalInfo.showBingImage;
      // api地址
      let api = isShowBingImage ? API.GET_BING_IMAGE : API.GET_MINE_IMAGE;
      // 判断本地是否有背景设置的数据信息
      const hasFixedImageBg = localStorage.getItem("fixedImageBg");
      // bing 的每日一图
      if (isShowBingImage) {
        getBingInfo(api, 0);
      } else {
        // 自定义图片  默认是我设置的图片
        if (
          hasFixedImageBg === null ||
          hasFixedImageBg === "" ||
          JSON.parse(hasFixedImageBg).type === "bing"
        ) {
          let index = store.getters.getFixedImageInfo.index;
          getMineBgByIndex(api, index);
        } else {
          // 背景图片地址设置本地存储
          const getFixedImageBg = JSON.parse(
            localStorage.getItem("fixedImageBg")
          );
          let index = store.getters.getFixedImageInfo.index;
          // 如果是自定义壁纸 判断有没有最新的壁纸  有就更新 没有就不更新
          if (getFixedImageBg && getFixedImageBg.type === "home") {
            fecth.post(api, { index: index }).then(res => {
              if (!(getFixedImageBg === null || "") && res.data) {
                // 判断是否和本地数据一样  一样则用本地的数据 不一样则请求最新的数据
                if (getFixedImageBg.url === res.data.url) {
                  store.dispatch({
                    type: "set_FixedImageInfo",
                    data: getFixedImageBg
                  });
                } else {
                  // 否则获取最新的图片信息
                  getMineBgByIndex(api, 0);
                }
              }
            });
          } else {
            // 如果是bing壁纸 判断有没有最新的壁纸  有就更新 没有就不更新
            fecth.post(api, { index: index }).then(res => {
              if (!(getFixedImageBg === null || "") && res.data) {
                // 判断是否和本地数据一样  一样则用本地的数据 不一样则请求最新的数据
                if (getFixedImageBg.url === res.data.url) {
                  store.dispatch({
                    type: "set_FixedImageInfo",
                    data: getFixedImageBg
                  });
                } else {
                  // 否则获取最新的图片信息
                  getBingInfo(api, 0);
                }
              }
            });
          }
        }
      }
    }
  },
  computed: {
    getGlobalStyle() {
      return store.getters.getGlobalInfo;
    },
    imageInfo() {
      console.log(store.getters.getFixedImageInfo);
      return store.getters.getFixedImageInfo;
    },
    imageSetting() {
      return store.getters.getFixedBgInfo;
    },
    getIsBingBg() {
      return store.getters.getGlobalInfo.showBingImage;
    },
    getShowLoading() {
      return store.getters.getShowLoading;
    },
    getCurrentMusic() {
      return store.getters.getCurrentAudio;
    },
    getVersionList() {
      return store.getters.getVersionList;
    },
    isLogin() {
      return store.getters.getUserInfo === null;
    }
  }
};
</script>
<style lang="stylus">
  .div_content
    position:fixed
    top:0
    left:0
    right:0
    height:40px
    line-height:40px
    .ul-header
      position:fixed
      top:0
      left:0
      right:0
      height:40px
      line-height:40px
      z-index:111
      margin:0
      font-size:0
      padding:0 20px
      .left-menu
        a
          list-style:none
          display:inline-block
          font-size:14px
          padding:0 14px
          margin:0
          color:$text_color
          cursor:pointer
          font-family:"Segoe UI",Segoe,Tahoma,Arial,Verdana,sans-serif
          text-decoration:none
          &.router-link-active
            li
              color:$text_color_active
              border-bottom:1px solid $border_color
          &.logo
            padding-left:0
          img
            width:36px
            vertical-align:middle
            border: none
      .right-menu
        position:absolute
        right:10px
        height:40px
        top:0
        font-size:0
        .listmenu
          display:inline-block
          font-size: 14px
          margin:0 8px
          height:100%
          vertical-align: middle
          color:$text_color
          vertical-align:top
          cursor:pointer
          position:relative
          font-weight: 200
          &.router-link-active
            color:$text_color_active
            border-bottom:1px solid $border_color
        a
          list-style:none
          display:inline-block
          font-size:14px
          margin:0 8px
          color:$text_color
          cursor:pointer
          font-family:"Segoe UI",Segoe,Tahoma,Arial,Verdana,sans-serif
          text-decoration:none
          &.router-link-active
            li
              color:$text_color_active
              border-bottom:1px solid $border_color
          li
            // border-bottom:none
            display:flex
            height:40px
            align-items:center
            i
              font-size:18px
              vertical-align: middle
      .fixed-menu
        position:absolute
        left:0
        top:0
        width:50px
        height:40px
        line-height:40px
        text-align:center
        i
          display: inline-block
          font-size: 20px
          vertical-align: middle
          color:$text_color
        &.active
          i
            color:$text_color_active
      .fixed-fade-menu
        position:fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: rgba(0,0,0,0.86)
        &.ios
          -webkit-backdrop-filter: blur(10px)
          background:rgba(0,0,0,0.5)
        &.fade-enter-to,&.fade-leave-to
          transition: all 0.5s
        &.fade-enter,&.fade-leave-to
          opacity:0
        // .fixed-list
        //   position:fixed
        //   top: 0
        //   left: 0
        //   bottom: 0
        //   width:280px
        //   height:100%
        //   background:red
        //   z-index:101
        //   transform:translate3d(0,0,0)
        //   &.slide-left-enter-to,&.slide-left-leave-to
        //     transition: all 0.8s
        //   &.slide-left-enter,&.slide-left-leave-to
        //     transform:translate3d(0,-280px,0)
        .fixed-menu-content
          width:100%
          height:100%
          padding:10px
          box-sizing:border-box
          font-size:14px
          display:flex
          flex-direction:column
          justify-content: center
          a 
            text-decoration:none
            li
              color:#fff
              width:100%
              height:40px
              line-height:40px
              text-align:center
            &.router-link-active
              li
                color:$border_color
                // border-bottom:1px solid $border_color
    .li_list
      transform:translate3d(0,0,0)
      &.fade-enter-to,&.fade-leave-to
        transition: all 0.8s
      &.fade-enter,&.fade-leave-to
        opacity:0
        transform:translate3d(0,50px,0)
  .icon-reward
    &:before
      color: $active_color
</style>