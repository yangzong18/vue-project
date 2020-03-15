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
import SetMaskType from '@/components/selectmask/selectmask.js'
import DGlobal from '@/common/js/global.js'
import {addClass, removeClass} from '@/common/js/Dom.js'
export default {
    props: {
    imagepath: {
      type: String,
      default: ''
    },
    maskcolor: {
      type: String,
      default: 'transparent'
    },
    maskopacity: {
      type: String,
      default: '0.5'
    },
    masktype: {
      type: String,
      default: 'default'
    },
    maskglobainfo: {
      type: Object,
      default: {}
    }
  },

}
</script>