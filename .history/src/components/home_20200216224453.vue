<template>
  <div class="home" v-if="imageInfo">
    <div class="home_center">
      <div class="home_center">
        <h1 class="title" key="title">
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
        </h1>
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