<template>
    <div class="user-info">
        <!-- 未登录 -->
        <ul class="login-no" style="dis">
            <li class="login"><a >登录</a></li>
        </ul>
        <!-- 已登录 -->
        <div class="login-yes">
            <div class="avertar"><img v-if="userInfo.avatar_url" :src="userInfo.avatar_url"></div>
            <div class="info">
                <p v-if="userInfo.loginname" v-text="userInfo.loginname"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'UserInfo',
}
</script>