<template>
    <div class="user-info">
        <!-- 未登录 -->
        <ul class="login-no" v-if="!userInfo.account">
            <li class="login" @click="goLogin"><a >登录</a></li>
        </ul>
        <!-- 已登录 -->
        <div class="login-yes" v-else>
            <div class="avertar"><img src="user"></div>
            <div class="info">
                <p>{{userInfo.account}}</p>
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
         goLogin() {
                this.$router.push({
                    name: 'login',
                    query: {
                        redirect: encodeURIComponent(this.$route.path)
                    }
                });
            },
    },
    watch: {
        // 切换页面
        '$route' (to, from) {
             this.isRouter = true;
        }
    },
}
</script>