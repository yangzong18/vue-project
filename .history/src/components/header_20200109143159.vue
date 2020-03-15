<template>
  <div>
    <div class="page-cover" v-if="fixHead&&show" @click="showList">
    </div>
    <header id="hd" :class="{'show':show&&fixHead,'fix-header':fixHead,'no-fix':!fixHead}">
      <div class="nv-toolbar">
        <div class="toolbar-nav" v-if="fixHead" @click="openList"></div>
        <span>全部</span>
        <!---->
        <a href class>
          <i class="iconfont add-icon">&#xe60f;</i>
        </a>
      </div>
    </header>
    <left-bar :show-menu="show" v-if="fixHead" style="display:none"></left-bar>
  </div>
</template>
<script>
import leftBar from "../components/leftbar";
import $ from "webpack-zepto";
export default {
  name: "nvHead",
  replace:true,
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
          alert(1111)
          this.show = !this.show;
          $('body').css('overflow', 'auto');
      },
      openList() {
            $('body').css('overflow', 'hidden');
            this.show = !this.show;
        },
  }
};
</script>