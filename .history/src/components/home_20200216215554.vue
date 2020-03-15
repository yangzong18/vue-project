<template>
  <div class="home">this is home</div>
</template>
<script>
export default {
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