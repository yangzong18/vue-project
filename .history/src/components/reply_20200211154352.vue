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
// import markdown from "markdown";
const markdown = require('markdown').markdown;
export default {
  name: "Reply",
  replace: true,
  props: ['topic', 'replyId', 'topicId', 'replyTo', 'show'],
  data() {
    return {
      hasErr: false,
      content: "",
      author_txt:
        '<br/><br/><a class="form" href="https://github.com/shinygang/Vue-cnodejs">I‘m webapp-cnodejs-vue</a>'
    };
  },
  mounted() {
    if (this.replyTo) {
      this.content = `@${this.replyTo} `;
    }
  },
  computed: {
            ...mapGetters({
                userInfo: 'getUserInfo'
            })
        },
  methods: {
    addReply() {
      if (!this.content) {
        this.hasErr = true;
        this.$alert("所写内容不能为空");
      } else {
        let time = new Date();
        let linkUser = utils.linkUsers(this.content);
        let htmlText = markdown.toHTML(linkUser) + this.author_txt;
        console.log(htmlText)
        let replyContent = $('<div class="markdown-text"></div>').append(htmlText)[0].outerHTML;
                            console.log(replyContent);
        let postData = {
          accesstoken: this.userInfo.token,
          content: this.content + this.author_txt
        };
        if (this.replyId) {
          postData.reply_id = this.replyId;
        }
        Reply(params).then(res=>{
                    if(res.data.success){
                        let user = {
                            loginname: res.data.loginname,
                            avatar_url: res.data.avatar_url,
                            userId: res.data.id,
                            token: this.token
                        };
                        window.sessionStorage.user = JSON.stringify(user);
                        this.$store.dispatch('setUserInfo', user);
                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                        this.$router.push({
                            path: redirect
                        });
                    }else{
                        this.$alert(res.data.error_msg);
                    }
                }).catch(error=>{
                    this.$alert(error.data.error_msg);

                })
        $.ajax({
                        type: 'POST',
                        url: `https://cnodejs.org/api/v1/topic/${this.topicId}/replies`,
                        data: postData,
                        dataType: 'json',
                        success: (res) => {
                            if (res.success) {
                                this.topic.replies.push({
                                    id: res.reply_id,
                                    author: {
                                        loginname: this.userInfo.loginname,
                                        avatar_url: this.userInfo.avatar_url
                                    },
                                    content: replyContent,
                                    ups: [],
                                    create_at: time
                                });
                            }
                            this.content = '';
                            if (this.show) {
                                this.$emit('close');
                            }
                        },
                        error: (res) => {
                                                        console.log(res)
                            var error = JSON.parse(res.responseText);
                            this.$alert(error.error_msg);
                            return false;
                        }
                    });
      }
    }
  }
};
</script>