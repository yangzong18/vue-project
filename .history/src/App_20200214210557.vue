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
  </div>
</template>
<script>
import fixedbg from '@/components/common/fixedbg/fixedbg.vue';
import loader from '@/components/common/loader/loader.vue'
import store from '@/store';
import DGlobal from '@/common/js/global.js'
// 引入背景请求的api
import {getBingInfo, getMineBgByIndex} from '@/common/api/background.js'
export default {
  name: "app",
  data() {
    return {
      isgetimagebybing: store.getters.getShowBingImage
    }
  },
  components: {
    "fixed-bg": fixedbg,
    loader,
  },
  mounted:{
  },
  methods: {
      isApp () {
      let isTrue = false
      if (document.body.clientWidth < 768) {
        isTrue = false
      } else {
        isTrue = true
      }
      store.commit({
        type: 'setIsHigher768',
        data: isTrue
      })
      // console.log(isTrue)
    },
  },
  computed: {
    getGlobalStyle () {
      return store.getters.getGlobalInfo
    },
    imageInfo () {
      return store.getters.getFixedImageInfo
    },
    imageSetting () {
      return store.getters.getFixedBgInfo
    },
    getIsBingBg () {
      return store.getters.getGlobalInfo.showBingImage
    },
    getShowLoading () {
      return store.getters.getShowLoading
    },
    getCurrentMusic () {
      return store.getters.getCurrentAudio
    },
    getVersionList () {
      return store.getters.getVersionList
    },
    isLogin () {
      return store.getters.getUserInfo === null
    }
  },
};
</script>