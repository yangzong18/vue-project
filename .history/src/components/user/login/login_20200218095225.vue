<template>
    <div class="login">
        <div class="login_content">
            <div class="login_select">
                <span class="s_singin">登录</span>
                <span class="s_register">注册</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return {
            // 0 是登录  1是注册
				status: 0,
				showSinginThen: false,
				username: '',
				password: '',
				susername: '',
				spassword: '',
				rightSigninName: ''
        }
    }
}
</script>
<style lang="stylus">
@import '~common/stylus/border-1px/index.styl';
@import '~common/stylus/global.styl';   
.login 
    position :fixed;
    top:0;
    bottom :0;
    left:
</style>