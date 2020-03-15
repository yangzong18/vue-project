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
            <li >
              <section class="user">
                <a href="/user/i5ting" class>
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
            <li>
              <section class="user">
                <a href="/user/jothy1023" class>
                  <img
                    src="https://avatars2.githubusercontent.com/u/14975630?v=4&amp;s=120"
                    class="head"
                  />
                </a>
                <div class="info">
                  <span class="cl">
                    <span class="name">jothy1023</span>
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
                  <p>在线给狼叔打 call！！！</p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/xx1124961758" class>
                  <img
                    src="https://avatars0.githubusercontent.com/u/13390985?v=4&amp;s=120"
                    class="head"
                  />
                </a>
                <div class="info">
                  <span class="cl">
                    <span class="name">xx1124961758</span>
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
                  <p>
                    <a href="/user/i5ting">@i5ting</a> 狼叔，有录播吗
                  </p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/vanishcode" class>
                  <img
                    src="https://avatars0.githubusercontent.com/u/20496444?v=4&amp;s=120"
                    class="head"
                  />
                </a>
                <div class="info">
                  <span class="cl">
                    <span class="name">vanishcode</span>
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
                  <p>奇舞团昨天团建，要不贺老说要去来着🤣</p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/i5ting" class>
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
                      发布于:14小时前
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
                  <p>
                    PPT
                    <a
                      href="https://github.com/i5ting/nodeparty-beijing-2020-1-11"
                    >https://github.com/i5ting/nodeparty-beijing-2020-1-11</a>
                  </p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/i5ting" class>
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
                      发布于:14小时前
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
                  <p>
                    <a href="/user/vanishcode">@vanishcode</a> 听hax说了，感谢感谢
                  </p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/i5ting" class>
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
                      发布于:14小时前
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
                  <p>
                    聚餐照片
                    <img
                      src="//static.cnodejs.org/FpZR_Fjz7xoh08h_NmyczX_wBwHK"
                      alt="mmexport1579450936429.jpg"
                    />
                  </p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/Boelroy" class>
                  <img
                    src="https://avatars0.githubusercontent.com/u/2794349?v=4&amp;s=120"
                    class="head"
                  />
                </a>
                <div class="info">
                  <span class="cl">
                    <span class="name">Boelroy</span>
                    <span class="name mt10">
                      <span></span>
                      发布于:13小时前
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
                  <p>
                    <a href="/user/i5ting">@i5ting</a> 为狼叔打call, 狼叔最帅
                  </p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/justjavac" class>
                  <img
                    src="https://avatars1.githubusercontent.com/u/359395?v=4&amp;s=120"
                    class="head"
                  />
                </a>
                <div class="info">
                  <span class="cl">
                    <span class="name">justjavac</span>
                    <span class="name mt10">
                      <span></span>
                      发布于:6小时前
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
                  <p>狼叔最帅</p>
                </div>
              </div>
              <!---->
            </li>
            <li>
              <section class="user">
                <a href="/user/i5ting" class>
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
                      发布于:2小时前
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
                  <p>
                    面向B端工作台的微前端方案-ConsoleOS-徐博文
                    <a
                      href="https://edu.talkingdata.com/open-class?id=142"
                    >https://edu.talkingdata.com/open-class?id=142</a>
                  </p>
                  <p>
                    Serverless在美团的实践-龙佳文
                    <a
                      href="https://edu.talkingdata.com/open-class?id=143"
                    >https://edu.talkingdata.com/open-class?id=143</a>
                  </p>
                  <p>
                    前端生态建设在瓜子的落地实践-王东
                    <a
                      href="https://edu.talkingdata.com/open-class?id=144"
                    >https://edu.talkingdata.com/open-class?id=144</a>
                  </p>
                  <p>
                    Egg-React-SSR深度解析-张宇昂
                    <a
                      href="https://edu.talkingdata.com/open-class?id=145"
                    >https://edu.talkingdata.com/open-class?id=145</a>
                  </p>
                  <p>
                    如何融入并贡献开源-Justjavac
                    <a
                      href="https://edu.talkingdata.com/open-class?id=146"
                    >https://edu.talkingdata.com/open-class?id=146</a>
                  </p>
                  <p>
                    圆桌讨论
                    <a
                      href="https://edu.talkingdata.com/open-class?id=147"
                    >https://edu.talkingdata.com/open-class?id=147</a>
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