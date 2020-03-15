<template>
  <div>
    <nv-head page-type="用户信息" :show-menu="false"></nv-head>
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
      <div class="message">
        <section class="user">
          <a href="/user/liuguanhua" class="head">
            <img src="https://avatars2.githubusercontent.com/u/15644158?v=4&amp;s=120" />
          </a>
          <a href="/topic/5e21cf2f1225c9423dcd8883" class="info">
            <div class="t-title">React、Antd写了个简洁版的后台前端管理系统 🎉</div>
            <span class="cl mt12">
              <span class="name">liuguanhua</span>
            </span>
            <span class="cr mt12">
              <span class="name">22小时前</span>
            </span>
          </a>
        </section>
      </div>
      <div class="no-data" style="display: none;">
        <i class="iconfont icon-empty"></i>
        暂无数据!
      </div>
    </section>
  </div>
</template>
<script>
import $ from "webpack-zepto";
import utils from "../libs/utils.js";
import nvHead from "../components/header.vue";
import { getPersonCenter } from "../api/api";
export default {
  name: "User",
  re
  data() {
    return {
      user: [],
      currentData: [],
      selectItem: 1
    };
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
        this.selectItem == idx;
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
      let params = { loginname: loginname };

      getPersonCenter(params).then(response => {
        let { code, info } = response.data;
        console.log(info);
        if (code == 200) {
          this.user = info;
          if (info.recent_replies.length > 0) {
            this.currentData = info.recent_replies;
          } else {
            this.currentData = info.recent_topics;
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
    $route(to, from) {
      this.getUser();
    }
  }
};
</script>
