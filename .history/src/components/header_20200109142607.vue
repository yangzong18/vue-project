<template>
  <div>
    <div class="page-cover" v-if="fixHead&&show" @click="showList">
    </div>
    <header id="hd" class="fix-header">
      <div class="nv-toolbar">
        <div class="toolbar-nav" v-if="fixHead"></div>
        <span>全部</span>
        <!---->
        <a href class>
          <i class="iconfont add-icon"></i>
        </a>
      </div>
    </header>
    <left-bar v-if="fixHead"></left-bar>
  </div>
</template>
<script>
import leftBar from "../components/leftbar";
import { $ } from "webpa";
export default {
  name: "nvHead",
  props: {
    pageType: String,
    fixHead: Boolean,
    messageCount: Number,
    scrollTop: 0,
    needAdd: {
      type: Boolean,
      default: true
    }
  },
  components:{
      leftBar
  },
  data() {
    return {
      nickname: "",
      profileimgurl: "",
      show: false
    };
  },
  methods:{
      showList:function(){
          this.show = !this.show;
          $('body').css('overflow', 'auto');
      }
  }
};
</script>