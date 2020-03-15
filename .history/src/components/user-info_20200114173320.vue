<template>
    <div class="user-info">
        <!-- 未登录 -->
        <ul class="login-no" v-if="!userInfo.loginName">
            <li class="login" @click="goLogin"><a >登录</a></li>
        </ul>
        <!-- 已登录 -->
        <div class="login-yes" v-else>
            <div class="avertar"><img src="http://dummyimage.com/120x120/FFF&text=Hernandez"></div>
            <div class="info">
                <p>walker838</p>
            </div>
        </div>
    </div>
</template>
<script>
import {
        mapGetters
    } from 'vuex';
export default {
    replace: true,
    name:'UserInfo',
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo'
        })
    },
    data() {
        return {
            
        }
    },
    methods:{
        goLogin:function(){
            this.$router.push({
                name:'login',
                query:{
                    redirect: encodeURIComponent(this.$route.path)
                }
            })
        }
    },
    watch: {
        // 切换页面
        '$route' (to, from) {
            // 如果是当前页面切换分类的情况
            if (to.query && to.query.tab) {
                this.searchKey.tab = to.query.tab;
                this.posts = [];
                this.index = {};
            }
            this.searchKey.page = 1;
            this.getData();
            // 隐藏导航栏
            this.$refs.head.show = false;
            $('body').css('overflow', 'auto');
        }
        },
}
</script>