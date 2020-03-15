<template>
  <div>
    <nv-head page-type="主题" :show-menu="false" :fix-head="true"></nv-head>
    <div class="add-container">
      <div class="line">
        选择分类：
        <select name id class="add-tab">
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
        </select>
        <a href class="add-btn">发布</a>
      </div>
      <div class="line">
          <input type="text" placeholder="标题，字数十个以上" class="add-title">
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
  .line {
    padding: 10px 15px;
    .add-tab {
      display: inline-block;
      min-width: 50%;
      font-size: 16px;
    }
    .add-btn {
      background-color: #80bd01;
      color: #fff;
      padding: 5px 15px;
      border-radius: 5px;
    }
    .add-title {
        font
    }
  }
}
</style>