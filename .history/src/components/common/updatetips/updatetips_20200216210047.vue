<template>
  <div class="updatetips" ref="updatetips">
    <transition name="fade">
      <div class="update_mask"></div>
    </transition>
    <span class="updatetime">更新时间 : {{updateInfo.updatetime}}</span>
    <transition name="scale">
        <div class="updatetips_info" v-show="show"></div>
    
    </transition>
  </div>
</template>
<script>
import DGlobal from "@/common/js/global.js";
import fecth from "@/utils/fecth.js";
import API from "@/config/api";
export default {
  name: "updatetips",
  data() {
    return {
      showInfo: false,
      updateInfo: {}
    };
  },
  props: {
    defaultValue: {
      type: Object,
      default: {}
    }
  },
  methods: {
    unUpdate() {
      this.showInfo = false;
      // 添加cookie方便以后过期再弹窗
      DGlobal.storage.setCookie(
        "update",
        this.updateInfo.version,
        60 * 60 * 2 * 1000
      );
    },
    isNeedUpdate() {
      const _this = this;
      fecth.get(API.IS_NEED_UPDATE).then(
        res => {
          _this.updateInfo = res.data[0];
          let versionStorage = window.localStorage.getItem("web_version");
          // 本地无存储号  必须弹窗提示更新
          // 本地有存储的版本号  和 线上的不一样  弹窗
          // 如果设置2小时之后再弹窗  则超出之后再弹窗更新
          // 如果在2小时内又更新了一个版本   则还是需要弹窗更新
          if (versionStorage !== null) {
            // console.log('有versionStorage')
            if (DGlobal.storage.getCookie("update") !== null) {
              // console.log('有cookie')
              if (
                DGlobal.storage.getCookie("update") !== _this.updateInfo.version
              ) {
                // console.log('cookie版本不同 --- 弹窗')
                _this.showInfo = true;
              } else {
                // console.log('cookie版本相同 --- 不弹窗')
                _this.showInfo = false;
              }
            } else {
              if (versionStorage !== _this.updateInfo.version) {
                // console.log('没有cookie时候  versionStorage版本不同 --- 弹窗')
                _this.showInfo = true;
              } else {
                // console.log('versionStorage版本相同')
                _this.showInfo = false;
              }
            }
          } else {
            // console.log('没有versionStorage')
            window.localStorage.setItem("web_version", this.updateInfo.version);
            DGlobal.storage.setCookie(
              "update",
              this.updateInfo.version,
              60 * 60 * 2 * 1000
            );
            _this.showInfo = true;
          }
        },
        err => {
          alert(err);
        }
      );
    }
  },
  mounted() {
    if (this.defaultvalue && this.defaultvalue.length) {
      this.versionInfo();
    } else {
      this.isNeedUpdate();
    }
  }
};
</script>