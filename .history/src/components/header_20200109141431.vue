<template>
  <div>
    <header id="hd" class="fix-header">
      <div class="nv-toolbar">
        <div class="toolbar-nav"></div>
        <span>全部</span>
        <!---->
        <a href="" class>
          <i class="iconfont add-icon"></i>
        </a>
      </div>
    </header>
  </div>
  <cm-bar v-if="fixHead"></cm-bar>
</template>
<script>
import cmbar from '../components/leftbar'
export default {
  name: "nvHead",
  components:{
      cmbar
  },
  data(){
      return {
          fixHead:false;
      }
  }
};
</script>