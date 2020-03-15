<template>
    <div class="login">
        <div class="login_content">
            <div class="login_select"></div>
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