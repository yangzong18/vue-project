<template>
  <div
    class="fixedbg"
    ref="fixedbg"
    :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:imagesize, backgroundPosition:imageposition}"
  >
    <div class="mask-fixedbg" :style="maskType"></div>
  </div>
</template>
<script>
import SetMaskType from "@/components/selectmask/selectmask.js";
import DGlobal from "@/common/js/global.js";
import { addClass, removeClass } from "@/common/js/Dom.js";
import "@/common/stylus/global.styl";
export default {
  name: "Fixedbg",
  data() {
    return {
      imagesize: "cover",
      imageposition: "center center",
      moveBg: true,
      alpha: "",
      beta: "",
      gamma: ""
    };
  },
  methods: {
    loadimgTrans() {
      addClass(this.$refs.fixedbg, "load");
      let img = new Image();
      img.src = this.imagepath;
      img.onload = () => {
        removeClass(this.$refs.fixedbg, "load");
      };
    }
  },
  watch: {
    imagepath(cur, old) {
      this.$nextTick(() => {
        this.loadimgTrans();
      });
    }
  },
  computed: {
    maskType() {
      var styleCss = SetMaskType(this.masktype, this.maskglobainfo);
      return styleCss;
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.loadimgTrans()
      this.initMoveBg()
    })
  }
  props: {
    imagepath: {
      type: String,
      default: ""
    },
    maskcolor: {
      type: String,
      default: "transparent"
    },
    maskopacity: {
      type: String,
      default: "0.5"
    },
    masktype: {
      type: String,
      default: "default"
    },
    maskglobainfo: {
      type: Object,
      default: {}
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.fixedbg {
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $color_deep_gray;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  &.load {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 1;
      visibility: visible;
      background-color: $color_deep_gray;
    }
  }

  .mask-fixedbg {
    position: fixed;
    z-index: 111111111111;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>