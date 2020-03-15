<template>
  <section class="reply">
    <textarea
      id="content"
      rows="8"
      class="text"
      :class="{'err':hasErr}"
      v-model="content"
      placeholder="回复支持Markdown语法,请注意标记代码"
    ></textarea>
    <a class="button" @click="addReply">确定</a>
  </section>
</template>
<script>
import utils from "../libs/utils";
import $ from "webpack-zepto";
import { mapGetters } from "vuex";
export default {
  name: "Reply",
  replace: true,
  data() {
    return {
      hasErr: false,
      content: ""
    };
  },
  methods: {
    addReply() {
      if (!this.content) {
        this.hasErr = true;
        this.$alert('所写内容不能为空');
      } else {
        let time = new Da
      }
    }
  }
};
</script>