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
            <span
              class="tag"
              :class="getTabInfo(topic.tab,topic.good,topic.top,true)"
            >{{topic.top|getTabStr()}}</span>
            <span class="name">3445次浏览</span>
          </div>
        </section>
        <section class="markdown-body topic-content">
          <div class="markdown-text">
            <h2>活动信息</h2>
            <p>
              <img src="//static.cnodejs.org/Fsqzwb41k7ivzIJn810EEwPQ_2it" alt="1111.png" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fu_XCoMAB8uUlFYPGWQ3ncssCb8t" alt="2222.png" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fge-hr_LF_guf0BbwQ9xmi0unnNi" alt="33333.png" />
            </p>
            <p>本次活动需要提前报名，场地大约有100人</p>
            <p>报名连接</p>
            <p>
              <a
                href="https://www.huodongxing.com/event/5526816284100?utm_source=%E5%8F%91%E7%8E%B0%E6%B4%BB%E5%8A%A8%E9%A1%B5&amp;utm_medium=&amp;utm_campaign=eventspage"
              >https://www.huodongxing.com/event/5526816284100?utm_source=发现活动页&amp;utm_medium=&amp;utm_campaign=eventspage</a>
            </p>
            <h2>PPT</h2>
            <p>
              <a
                href="https://github.com/i5ting/nodeparty-beijing-2020-1-11"
              >https://github.com/i5ting/nodeparty-beijing-2020-1-11</a>
            </p>
            <h2>照片</h2>
            <p>
              龙佳文
              <img src="//static.cnodejs.org/Fg4dIjPNKksKiOMmyIgGMEg1087O" alt="111 1.jpg" />
            </p>
            <p>
              十忆
              <img src="//static.cnodejs.org/Fs9J2dxbgickUDOzM7Vwuxd7HVKF" alt="222 1.jpg" />
              狼叔
              <img
                src="//static.cnodejs.org/Fhc9AmVNEbqAdmxOUTYwIN7XdYU_"
                alt="3333 1.jpg"
              />
              王东
              <img
                src="//static.cnodejs.org/FssLOS3hMlVq658eD_yb3CJpeW8C"
                alt="4444 1.jpg"
              />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fsuj39b-PoVOS65vAoVgFqbR9m8Q" alt="5555 1.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FiTD21bRAzZZbpCueJRk7Uq-Ik7i" alt="7777 1.jpg" />
              现场提问
              <img
                src="//static.cnodejs.org/Fm6ssdq_P6JNaftwAZ_AyiXtVIxb"
                alt="8888 1.jpg"
              />
              流司
              <img
                src="//static.cnodejs.org/FoqgjwSNssTlJ1ufnowc1jxx_imR"
                alt="9923 1.jpg"
              />
              现场提问
              <img
                src="//static.cnodejs.org/FplNNONJOacRNbvnvc7EBl1sgN8U"
                alt="9999 1.jpg"
              />
              现场
              <img
                src="//static.cnodejs.org/Fl--jBm9nfRCmNPCvL92TrlkvdGT"
                alt="11212 1.jpg"
              />
            </p>
            <p>
              圆桌会
              <img src="//static.cnodejs.org/Fq7xH6d9K1bor6ixUFY1AEO4d8GU" alt="23323e4ds 1.jpg" />
              <img src="//static.cnodejs.org/FulUvueqoTJ8nIGlOgJTD1JFGDPA" alt="322332.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Ftw6oRg8G-eeqQ2SLrwiaj671sMF" alt="稳稳稳.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FozWsIovHilxYBlJ-I8LmYW-gNhi" alt="32323.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fvhek3xeqE4afj41AuB5Vuj7MwSr" alt="43434.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FvM4WhrhpkRT9sZ3CxsbGy8OX7bH" alt="55545.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fh7MgA9zXpT3Gc-1UfXsd3o8FB6F" alt="111110.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fr6oow-uHpFkkoVo2xIaw3Xm-gdI" alt="232323.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fl3A1Ijt8IeE9XHT9DNNUM_I0OkB" alt="232332.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FobbWO7B2JwwszK80ZpJT8Pl6f0Y" alt="322323.jpg" />
              <img src="//static.cnodejs.org/Fr7qQvzHT6pLInnX9m6JeFZEjKYC" alt="812312.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FinFnUdjTZjt2DAdjC5H-DsYZ4Fa" alt="882323.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fq-nKPQt4JeiBZAQKft6vW49pGiB" alt="3434389.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FuAt3QuZ-Y9E21EMrkn05JAcPLsf" alt="9999923.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FkpIr82doXBBk7VH1aGM6zD16qZ-" alt="23323232323.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FiKYZ46Ilm5OVT_Tunhmga8x-vrr" alt="232323232332.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FqOE05r204gsYDWp-m9p04Vf1ME_" alt="aaa.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FmRRAzINYs-j5hF-n7-LZKscD23e" alt="bbbb.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FjIIelIuczqPkJjWSKC5wEtv3uzD" alt="cccc.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FjIIelIuczqPkJjWSKC5wEtv3uzD" alt="cccc.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FtponmJNP2UD0qemwD_1vBBa0ibK" alt="dddd.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fv0LVdt1X6RizMg5gp2CerH1pIMH" alt="dfdfd.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/Fgw6rAtxlJg9fWLlQNM4gwozWlVj" alt="eeeee.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FlnX4CFVmxrFQXmNWYQuwt6Ar4Et" alt="EmptyName 2.jpg" />
            </p>
            <p>
              <img src="//static.cnodejs.org/FnnoaFaMof3IxOR9sWJIj6jrjcPx" alt="hjkl;'.jpg" />
            </p>
            <p>
              王东
              <img src="//static.cnodejs.org/FhNqWIas9yk1XuYvNHtijUzB40BK" alt="jhklsd.jpg" />
            </p>
            <p>
              嘉宾合影
              <img src="//static.cnodejs.org/FvKMqpc7UZhVeRKXUNvtY8FuBAEh" alt="上3.jpg" />
            </p>
            <p>
              狼书签名
              <img src="//static.cnodejs.org/FgxEWL85ZMEA8qpVakAvvSUWEmVd" alt="23e4232 1.jpg" />
            </p>
            <h2>视频</h2>
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
        </section>
        <section class="reply-list">
          <ul>
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
      getTabInfo(tab, good, top, isClass);
    },
    // getLastTimeStr(time, ago) {
    //   return utils.getLastTimeStr(time, ago);
    // }
  },
  components: {
    nvHead
  }
};
</script>
<style lang="scss">
</style>