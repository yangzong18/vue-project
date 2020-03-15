<template>
  <div>
    <nv-head page-type="主题" :show-menu="showMenu" :need-add="true" :fix-head="true"></nv-head>
    <div id="page">
      <h2 class="topic-title">2020年1月11日Node party@北京成功举办，附照片、视频和ppt</h2>
      <section class="author-info">
        <img src="https://avatars3.githubusercontent.com/u/3118295?v=4&amp;s=120" class="avatar" />
        <div class="col">
          <span>i5ting</span>
          <time>发布于:1周前</time>
        </div>
        <div class="right">
          <span class="tag top">置顶</span>
          <span class="name">3445次浏览</span>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import nvHead from "../components/header";
export default {
  name: "Topic",
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    nvHead
  }
};
</script>
<style lang="scss">

</style>