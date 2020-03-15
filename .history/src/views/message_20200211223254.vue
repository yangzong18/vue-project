<template>
  <div style="height: 100%;">
    <nv-head
      page-type="消息"
      :fix-head="true"
      :show-menu="showMenu"
      :message-count="no_read_len"
      :need="true"
    ></nv-head>
    <div class="page">
      <ul class="tabs">
        <li class="item" :class='{"selected":selectItem == 2}' @click="changeItem(2)">已读消息</li>
        <li class="item" :class='{"selected":selectItem == 1}' @click="changeItem(1)">未读消息</li>
      </ul>
      <div class="message markdown-div" v-for="(item,idx) in currentData">
        <section class="user">
          <img class="head" :src="item.author.avatar_url" />
          <div class="info">
              <span class="cl">
                  <span class="name">{{item.author.loginname}}</span>
                  <span class="name" v-if="item.type==='at'">在回复中@了您</span>
                  <span class="name" v-if=""></span>
              </span>
          </div>
        </section>
      </div>
      <div class="no-data" v-show="noData">
                <i class="iconfont icon-empty">&#xe60a;</i>
                暂无数据!
            </div>
    </div>message
  </div>
</template>
<script>
import nvHead from "../components/header.vue";
import { mapGetters } from "vuex";
import { getMsg } from "@/service";
export default {
  name: "Message",
  data() {
    return {
      showMenu: false,
      selectItem: 2,
      message: {},
      noData: false,
      currentData: [],
      no_read_len: 0
    };
  },
  mounted() {
    document.title = this.$route.meta.title;
    getMsg(this.userInfo.token)
      .then(res => {
        let d = res.data;
        console.log(d.data);
        if (d.success) {
          this.message = d.data;
          this.no_read_len = d.data.hasnot_read_messages.length;
          if (d.data.hasnot_read_messages.length > 0) {
            this.currentData = d.data.hasnot_read_messages;
          } else {
            this.currentData = d.data.has_read_messages;
            this.selectItem = 2;
          }
          this.noData = this.currentData.length === 0;
        } else {
          this.noData = true;
        }
        console.log(this.currentData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    changeItem(idx) {
      this.selectItem = idx;
      this.currentData =
        idx === 1
          ? this.message.hasnot_read_messages
          : this.message.has_read_messages;
      this.noData = this.currentData.length === 0;
    }
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo"
    })
  },
  components: {
    nvHead
  }
};
</script>