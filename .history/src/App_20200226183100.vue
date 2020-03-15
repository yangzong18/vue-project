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
    <div class="dw-react-web-lyric-comp" v-if="getMusicLrc">
      <ul class="dw-react-web-lyric-comp-content">
        <li class="dw-react-web-lyric-comp-content-list" v-text="getMusicLrc"></li>
      </ul>
      <span class="dw-react-web-lyric-comp-close" @click="shutDownLyr">关闭</span>
    </div>
  </div>
</template>
<script>
import fixedbg from "@/components/common/fixedbg/fixedbg.vue";
import loader from "@/components/common/loader/loader.vue";
import content from "@/components/common/content/content.vue";
import updatetips from "@/components/common/updatetips/updatetips.vue";
import store from "@/store";
import DGlobal from "@/common/js/global.js";
import API from "@/config/api";
// 引入背景请求的api
import { getBingInfo, getMineBgByIndex } from "@/common/api/background.js";
import { addClass, removeClass } from "@/common/js/Dom.js";
export default {
  name: "app",
  data() {
    return {
      isgetimagebybing: store.getters.getShowBingImage
    };
  },
  components: {
    "v-content": content,
    "fixed-bg": fixedbg,
    loader,
    updatetips
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
    localStorage.setItem(
      "globalInfo",
      JSON.stringify(store.getters.getGlobalInfo)
    );
  },
  methods: {
    shutDownLyr(e){
      console.log(e.currentTarget.parentElement)
      addClass(e.currentTarget.parentElement,'hide')
    },
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
      // console.log(isTrue);
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
    getMusicLrc(){
      return store.getters.getAudiolrcIndex;
    },
    imageInfo() {
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
/* *** this is App css ** */
@import '~common/stylus/border-1px/index.styl';
@import '~common/stylus/global.styl';

.dw-react-web-lyric-comp {
    position: fixed;
    bottom: 20px;
    height: 50px;
    z-index: 119;
    width: 400px;
    left: 50%;
    right: 50%;
    transform: translate3d(-50%,0,0);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 0.6;
    visibility: visible;
    transition: opacity .3s;
    background-color:#fff;
    .dw-react-web-lyric-comp-close {
      flex: 0 0 75px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .3s;
      font-size: 12px;
    }
    .dw-react-web-lyric-comp-content {
      flex: 1 1 auto;
      overflow: hidden;
      padding: 0 10px 0 40px;
      .dw-react-web-lyric-comp-content-list {
        text-overflow: ellipsis;
        // white-space: nowrap;
        overflow: hidden;
        color: var(--text-color);
    }
  }
}

audio {
  display: none;
}

body, html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #f0f0f0f0;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

#app {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: transparent;
}
</style>
