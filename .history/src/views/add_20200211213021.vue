<template>
  <div>
    <nv-head page-type="主题" :show-menu="false" :fix-head="true"></nv-head>
    <div class="add-container">
      <div class="line">
        选择分类：
        <select name id class="add-tab" v-model="topic.tab">
          <option value="share">分享</option>
          <option value="ask">问答</option>
          <option value="job">招聘</option>
        </select>
        <a @click="addTopic" class="add-btn">发布</a>
      </div>
      <div class="line">
        <input
          type="text"
          placeholder="标题，字数十个以上"
          class="add-title"
          :class="{'err':err=='title'}"
          max-length="100"
          v-model="topic.title"
        />
      </div>
      <textarea
        v-model="topic.content"
        class="add-content"
        rows="35"
        :class="{'err':err=='content'}"
        placeholder="回复支持Markdown语法,请注意标记代码"
      ></textarea>
    </div>
  </div>
</template>
<script>
import nvHead from "../components/header";
import utils from "../libs/utils";
import $ from "webpack-zepto";
import { mapGetters } from "vuex";
export default {
  name: "add",
  data() {
    return {
      topic: {
        tab: "share",
        title: "",
        content: ""
      },
      err: "",
      authorTxt:
        '<br/><br/><a class="from" href="https://github.com/shinygang/Vue-cnodejs">I‘m webapp-cnodejs-vue</a>'
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo"
    })
  },
  methods: {
    addTopic() {
      let title = $.trim(this.topic.title);
      let contents = $.trim(this.topic.content);
      if (!title || title.length < 10) {
          this.err = 'title';
        this.$alert('标题格式错误');
        return;
      }
      if (!contents) {
        this.$alert('所写内容不能为空');
        return;
      }
      
    }
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
  .add-content {
    margin: 15px 2%;
    width: 96%;
    border-color: #d4d4d4;
    color: #000;
    
  }
  .err {
      border: solid 1px red;
    }
  .line {
    padding: 10px 15px;
    border-bottom: 1px solid #d4d4d4;
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
      font-size: 16px;
      border: none;
      width: 100%;
    }
    .err {
      border: solid 1px red;
    }
  }
}
</style>