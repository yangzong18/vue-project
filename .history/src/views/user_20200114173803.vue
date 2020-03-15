<template>
    <div>
        <nv-head page-type="用户信息" :fix-head="true" :show-menu="false" :need-add="true" ></nv-head>
        <section class="userinfo">
            <img class="u-img" :src="user.avatar_url" /><br/>
            <span class="u-name" v-text="user.loginname"></span>
            <div class="u-bottom">
                <span class="u-time" v-text="getLastTimeStr(user.create_at, false)"></span>
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
                    <router-link class="head" :to="{name:'user',params:{loginname:item.author.loginname}}">
                        <img :src="item.author.avatar_url" />
                    </router-link>
                    <router-link class="info" :to="{name:'topic',params:{id:item.id}}">
                        <div class="t-title">{{item.title}}</div>
                        <span class="cl mt12">
                            <span class="name">{{item.author.loginname}}</span>
                        </span>
                        <span class="cr mt12">
                            <span class="name" v-text="getLastTimeStr(item.last_reply_at, true)"></span>
                        </span>
                    </router-link>
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
export default {
    name:'User'
}
</script>
