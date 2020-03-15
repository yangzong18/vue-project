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
    },
    fnMoveBg () {
      const _this = this
      if (this.moveBg && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        let sizeY = window.screen.height
        // let sizeX = window.screen.width
        _this.$refs.fixedbg.style.backgroundSize = `auto calc(${sizeY}px)`
        window.addEventListener('deviceorientation', function (event) {
          _this.alpha = Math.round(event.alpha)
          _this.beta = (Math.round(event.beta) > 50 ? 50 : Math.round(event.beta)) < -50 ? -50 : (Math.round(event.beta) > 50 ? 50 : Math.round(event.beta))
          _this.gamma = (Math.round(event.gamma) > 30 ? 30 : Math.round(event.gamma)) < -30 ? -30 : (Math.round(event.gamma) > 30 ? 30 : Math.round(event.gamma))
          _this.$refs.fixedbg.style.backgroundPosition = `calc(${_this.gamma} / 45 * 15px + 50%) calc(${_this.beta} / 45 * 15px + 50%) `
          // _this.$refs.fixedbg.style.WebkitTransform = `translate3d(${_this.gamma}px,${_this.beta}px,0)`
        })
      }
    },

    initMoveBg () {
      // 设置背景色
      DGlobal.utils.moveImage().then(() => {
        this.fnMoveBg()
      }, () => {
        // this.fnMoveBg()
        this.$msg('让我猜一下,你一定是安卓手机,hahaha')
      })
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
  },
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
// 主色调
$primary_c = #F4C2EC;

// 正常文字颜色
$text_color = #fff;

$text_color_opacity = rgba(225,225,225,0.8);
$text_link_color = #91AACE;

// active状态下的颜色
$text_color_active = #ccc;

$text_before_color = rgba(225,225,225,.8);

// 列表在hover状态下的背景色
$list_hover = rgba(0,0,0,0.2);

// 遮罩层背景色
$mask_color = rgba(0,0,0,0.98);
$mask_color_opacity = rgba(0,0,0,0.58);
$mask_color_gray = rgba(122,122,122,0.3)

// 边框颜色
$border_color = $primary_c;
$border_bottom_color = rgba(255,255,255,0.1);
$border_bottom_color_deep = rgba(255,255,255,0.3)

// box-shadow
$box_s_eee = #eee

// active色调
$active_color = $primary_c;

// color 顔色
$color_gray = #aaa;
$color_deep_gray = #222;

//勾选的颜色  
$check_color = rgba(36,174,61,0.4)
$check_active_color = rgba(36,174,61,0.6)
$check_color_deep = rgba(36,174,61,0.8)

$btn_hover_color = rgba(255,255,255,0.4);

// ============= 音乐进度条
$progress_color = rgba(255,255,255,0.1);
$buffering_color = rgba(255,255,255,0.2);
$real_color = $primary_c;
$range_color = rgba(255,255,255,1);


// 自定义组件  通用样式
$com_bg = rgba(12,14,27,0.96)
$com_text_color = rgba(255,255,255,0.6)
$com_text_color_deep = rgba(255,255,255,0.9)
$com_text_color_active = rgba(255,255,255,0.8)


// 红色按钮  更新页面的效果
$com_button_deep = rgba(255,12,12,0.08)
$com_button_color = rgba(255,12,12,0.03)
$com_button_active_color = rgba(255,12,12,0.05)

import "./custom_input.styl"
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