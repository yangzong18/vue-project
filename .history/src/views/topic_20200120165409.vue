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
            <li v-for="repliy in topic.replies">
              <section class="user">
                <router-link :to="{name:'user',params:{loginname:repliy.author.loginname}}">
                    <img :src="repliy.author.avatar_url" alt="" class="head">
                </router-link>
                <div class="info">
                  <span class="cl">
                    <span class="name" v-text="repliy.author.loginname"></span>
                    <span class="name mt10">
                      <span></span>
                      发布于:{{repliy.author.create_at|getLastTimeStr(true)}}
                    </span>
                  </span>
                  <span class="cr">
                    <span class="iconfont icon" :class="{'uped':isUps(repliy.ups)}">&#xe608;</span>
                    {{repliy.ups.length}}
                    <span class="iconfont icon">&#xe609;</span>
                  </span>
                </div>
              </section>
              <div class="reply_content" v-html="repliy.content">
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
import utils from '../libs/utils';
import $ from 'webpack-zepto';
import {mapGetters} from
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
    isUps(ups) {
        return $.inArray(this.userInfo.userId,ups) >= 0;
    },
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