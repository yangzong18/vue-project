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
import fixedbg from '@/components/common/fixedbg/fixedbg.vue'
export default {
  name: "app",
  components: {
    "fixed-bg": fixedbg,
  }
};
</script>