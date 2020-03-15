<template>
  <div>
    <header id="hd" class="fix-header">
      <div class="nv-toolbar">
        <div class="toolbar-nav" v-if="fixHead"></div>
        <span>全部</span>
        <!---->
        <a href="" class>
          <i class="iconfont add-icon"></i>
        </a>
      </div>
    </header>
    <nv-menu :show-menu="show" v-if="fixHead"></nv-menu>
  </div>
</template>
<script>
import cmbar from '../components/leftbar'
export default {
  name: "nvHead",
  data(){
      return {
          fixHead: false,
      };
  }
};
</script>