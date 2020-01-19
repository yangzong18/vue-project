<template>
  <section id="sideBar" class="nav-list" :class="{'show':showMenu}">
    <user-info></user-info>
    <section class="list-ul">
      <router-link class="icon-quanbu iconfont item" :to="{name:'list',query:{tab:'all'}}">全部</router-link>
      <router-link class="icon-hao iconfont item" :to="{name:'list',query:{tab:'good'}}">精华</router-link>
      <router-link class="icon-fenxiang iconfont item" :to="{name:'list',query:{tab:'share'}}">分享</router-link>
      <router-link class="icon-wenda iconfont item" :to="{name:'list',query:{tab:'ask'}}">问答</router-link>
      <router-link class="icon-zhaopin iconfont item" :to="{name:'list',query:{tab:'job'}}">招聘</router-link>
      <router-link class="icon-xiaoxi iconfont item line" :to="{name:'message'}">消息</router-link>
      <router-link class="icon-about iconfont item" :to="{name:'about'}">关于</router-link>
    </section>
  </section>
</template>
<script>
  import UserInfo from '../components/user-info.vue';
  export default {
    name: "LeftBar",
    replace: true,
    props: ["showMenu", "pageType", "nickName", "profileUrl"],
    components: {
      'userInfo': UserInfo
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      console.log('beforeRouteEnter')
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('update')
    },
    beforeRouteLeave (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当钩子执行前，组件实例还没被创建
      console.log('beforeRouteLeave')
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log('beforeRouteUpdate')
    },
  };
</script>
<style lang="scss">
  /*侧边栏*/

  .nav-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -200px;
    width: 200px;
    background-color: #fff;
    color: #313131;
    transition: all .3s ease;
    z-index: 99;

    &.show {
      transform: translateX(200px);
    }
  }

  /*侧边栏列表*/

  .list-ul {
    margin: 0 24px;
    border-top: 1px solid #d4d4d4;
    overflow: hidden;
    padding-top: 9%;

    .item {
      display: block;
      font-size: 14px;
      font-weight: 200;
      padding: 9% 0;
      text-align: left;
      text-indent: 1px;
      line-height: 15px;
      color: #313131;
      font-weight: 700;

      &:last-child {
        margin-bottom: 50px;
      }

      &:before {
        color: #2c3e50;
      }
    }

    .line {
      border-top: 1px solid #d4d4d4;
    }
  }
</style>