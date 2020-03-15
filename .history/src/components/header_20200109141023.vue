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
  <-bar></left-bar>
</template>
<script>
import leftbar from '../components/leftbar'
export default {
  name: "header",
  components:{
      leftbar
  }
};
</script>