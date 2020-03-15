<template>
  <div>
    <nv-head page-type="主题" :show-menu="showMenu" :need-add="true" :fix-head="true"></nv-head>
    <div id="page" :class="{'show-menu':showMenu}" v-if="topic.title">
      <div class="no-data" v-if="noData">
        <i class="iconfont icon-empty">&#xe60a;</i>
        该话题不存在!
      </div>
      <div class="yes-data" v-else>
        <h2 class="topic-title" v-text="topic.title"></h2>
        <section class="author-info">
          <img :src="topic.author.avatar_url" class="avatar" />
          <div class="col">
            <span v-text="topic.author.loginname"></span>
            <time>发布于:{{topic.create_at|getLastTimeStr(true)}}</time>
          </div>
          <div class="right">
            <span class="tag" :class="getTabInfo(topic.tab,topic.good,topic.top,true)" v-text="getTabInfo(topic.tab,topic.good,topic.top,false)"></span>
            <span class="name">{{topic.visit_count}}次浏览</span>
          </div>
        </section>
        <section class="markdown-body topic-content" v-html="topic.content">
          
        </section>
        <h3 class="topic-reply">
            <strong>{{topic.reply_count}}</strong> 回复
        </h3>
        <section class="reply-list">
          <ul>
            <li v-for="topic.replies">
              <section class="user">
                  <router-link :to="{name:'user',params:{loginname:}}"></router-link>
                <a href="" class>
                  <img
                    src="https://avatars3.githubusercontent.com/u/3118295?v=4&amp;s=120"
                    class="head"
                  />
                </a>
                <div class="info">
                  <span class="cl">
                    <span class="name">i5ting</span>
                    <span class="name mt10">
                      <span></span>
                      发布于:1周前
                    </span>
                  </span>
                  <span class="cr">
                    <span class="iconfont icon"></span>
                    0
                    <span class="iconfont icon"></span>
                  </span>
                </div>
              </section>
              <div class="reply_content">
                <div class="markdown-text">
                  <p>本次活动感谢talkding data支持场地</p>
                  <p>
                    <img src="//static.cnodejs.org/FpWR6OSuCx4XsE2nE8J06UVzWWP6" alt="55555.png" />
                  </p>
                </div>
              </div>
              <!---->
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import nvHead from "../components/header";
import { getTopic } from "@/api/api";
import utils from '../libs/utils'
export default {
  name: "Topic",
  data() {
    return {
      showMenu: false,
      topicId: "",
      topic: {},
      noData: false
    };
  },
  beforeMount() {
    this.getData();
  },
  mounted() {
    // 隐藏左侧展开菜单
    this.showMenu = false;
  },
  methods: {
    getData() {
      // 获取url传的tab参数
      this.topicId = this.$route.params.id;
      getTopic(this.topicId).then(res => {
        console.log(res);
        if (res && res.data) {
          this.topic = res.data;
        } else {
          this.noData = true;
        }
      });
    },
    getTabInfo(tab, good = false, top, isClass) {
      return utils.getTabInfo(tab, good, top, isClass);
    },
    getLastTimeStr(time, ago) {
      return utils.getLastTimeStr(time, ago);
    }
  },
  components: {
    nvHead
  }
};
</script>
<style lang="scss">
</style>