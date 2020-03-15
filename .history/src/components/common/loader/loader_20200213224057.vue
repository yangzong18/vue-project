<template>
  <div class="loader" v-show="isshow" :style="{backgroundColor:loaderbackgroud}"></div>
</template>
<script>
export default {
  props: {
    loaderwidth: {
      default: "40px"
    },
    loaderbackgroud: {
      default: "#2a323b"
    },
    topbottomcolor: {
      default: "#545a6a"
    },
    leftrightcolor: {
      default: "#d4d4db"
    },
    borderopacity: {
      default: "0.5"
    },
    borderduration: {
      default: "0.8s"
    },
    isshow: {
      default: true
    }
  }
};
</script>
<style lang="stylus">

@import url();

.loader, position:fixed, top:0, left:0, right:0, bottom:0, background:#2A323B, z-index:1111, .loader-content {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  transform: translate3d(-50%, -50%, 0);

  .loader-range {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    animation: rotate 0.8s linear infinite;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border-top: 1px solid #545a6a;
    border-bottom: 1px solid #d4d4db;
    border-left: 1px solid #545a6a;
    border-right: 1px solid #d4d4db;
    opacity: 0.5;
    animation-name: load_cycle;

    @keyframes load_cycle {
      0% {
        transform: rotateZ(-360deg);
      }

      100% {
        transform: rotateZ(0deg);
      }
    }

    @keyframes load_cycle {
      0% {
        transform: rotateZ(-360deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }
  }
}
</style>