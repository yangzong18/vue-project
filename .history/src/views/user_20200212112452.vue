<template>
  <div>
    <nv-head page-type="用户信息" :show-menu="false" :fix-head="true" :need-add="false"></nv-head>
    <section class="userinfo">
      <img :src="user.avatar_url" alt class="u-img" />
      <br />
      <span class="u-name" v-text="user.loginname"></span>
      <div class="u-bottom">
        <span class="u-time">{{user.create_at|getLastTimeStr(false)}}</span>
        <span class="u-score">积分：{{user.score}}</span>
      </div>
    </section>

    <section class="topics">
      <ul class="user-tabs">
        <li class="item br" :class='{"selected":selectItem === 1}' @click="changeItem(1)">最近回复</li>
        <li class="item" :class='{"selected":selectItem === 2}' @click="changeItem(2)">最新发布</li>
      </ul>
      <div class="message" v-for="item in currentData">
        <section class="user">
            <router-link :to="{name:'user',params:{loginname:item.author.loginname}}" class="head">
                <img :src="item.author.avatar_url" >
            </router-link>
            <routerLink class="info" :to="{name:'topic',params:{id:item.id}}">
                <div class="t-title">{{item.title}}</div>
                <span class="cl mt12">
                    <span class="name">{{item.author.loginname}}</span>
                </span>
                <span class="cr mt12">
                    <span class="name">{{item.author.last_reply_at|getLastTimeStr(true)}}</span>
                </span>
            </routerLink>
        </section>
      </div>
      <div class="no-data" v-show="currentData.length === 0">
        <i class="iconfont icon-empty">&#xe60a;</i>
        暂无数据!
      </div>
    </section>
  </div>
</template>
<script>
import $ from "webpack-zepto";
import utils from "../libs/utils.js";
import nvHead from "../components/header.vue";
import { getUserInfo } from "@/service";
export default {
  name: "User",
  replace:true,
  data() {
    return {
      user: [],
      currentData: [],
      selectItem: 1
    };
  },
  created(){

  },
  mounted() {
    document.title = this.$route.meta.title;
    this.getUser();
  },
  beforeRouteLeave(to, from, next) {
    $(window).off("scroll");
    next();
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  methods: {
    changeItem(idx){
        this.selectItem = idx;
        this.currentData = idx === 1 ? this.user.recent_replies : this.user.recent_topics;
    },
    getUser() {
      let loginname = this.$route.params.loginname;
      if (!loginname) {
        this.$alert("缺少用户名参数");
        this.$router.push({
          name: "/"
        });
        return false;
      }
      console.log(loginname)
      getUserInfo(loginname).then(d => {
        if(d.data.success){
          let data = d.data.data;
          this.user = data;
          if (data.recent_replies.length > 0) {
              this.currentData = data.recent_replies;
          } else {
              this.currentData = data.recent_topics;
              this.selectItem = 2;
          }
        }
      });
    }
  },
  components: {
    nvHead
  },
  watch: {
    '$route' (to, from) {
      this.getUser();
    }
  }
};
</script>
