<template>
  <div>
    <nv-head page-type="主题" :show-menu="false" :fix-head="true"></nv-head>
    <div class="add-container">
      <div class="line">选择分类：
          <select name="" id="">
              <option value="全部"></option>
          </select>
      </div>
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
    background-color: #fff;
    .line{
        padding: 10px 15px;
    }
}
    
</style>