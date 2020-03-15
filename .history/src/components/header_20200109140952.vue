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
  <left-bar></left-bar>
</template>
<script>
import leftbar from '../components/'
export default {
  name: "header"
};
</script>