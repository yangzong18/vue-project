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
import SetMaskType from '@/compo/selectmask/selectmask.js'
import DGlobal from '@/common/js/global.js'
import {addClass, removeClass} from '@/common/js/Dom.js'
export default {

}
</script>