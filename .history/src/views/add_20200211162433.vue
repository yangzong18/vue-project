<template>
  <div>
    <nv-head page-type="主题" :show-menu="false" :fix-head="true"></nv-head>
    <div class="add-container">
      <div class="line">分类：</div>
    </div>
  </div>
</template>
<script>
import nvHead from "../components/header";
import utils from "../libs/utils";
import $ from "webpack-zepto";
export default {
  name: "add",
  data() {
    return {};
  },
  components: {
    nvHead
  }
};
</script>
<style lang="scss">
.add-container {
    margin-top: 50px;
    .line{
        padd
    }
}
    
</style>