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
    left:0;
    right:0;
    background: rgba(0,0,0,0.6);
    .login_content
        position :absolute;
        top:50%;
        left:50%;
        width :90%;
        min-height: 300px;
    max-width: 340px;
    padding: 5px 0px;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    background: rgba(0,0,0,0.4);
        .login_select 
            width: 100%;
            height: 48px;
            line-height: 48px;
            font-size: 0;
            padding: 0 5px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
</style>