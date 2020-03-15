<template>
    <section id="sideBar" class="nav-list" :class="{'show':showMenu}">
        <section class="list-ul">
            <router-link class="icon-quanbu iconfont item" :to="{'name':'list',query:{tab:'all'}}">全部</router-link>
            <router-link class="icon-hao iconfont item" :to="{'name':'list',query:{tab:'good'}}">精华</router-link>
            <router-link class="icon-fenxiang iconfont item" :to="{'name':'list',query:{tab:'share'}}">分享</router-link>
            <router-link class="icon-wenda iconfont item" :to="{'name':'list',query:{tab:'ask'}}">问答</router-link>
            <router-link class="icon-zhaopin iconfont item" :to="{'name':'list',query:{tab:'job'}}">招聘</router-link>
            <router-link class="icon-xiaoxi iconfont item line" :to="{'name':'message'}">消息</router-link>
            <router-link class="icon-about iconfont item" :to="{'name':'about'}">关于</router-link>
        </section>
    </section>
</template>
<script>
    export default {
        replace: true,
        props: ['showMenu', 'pageType', 'nickName', 'profileUrl'],
    };
</script>