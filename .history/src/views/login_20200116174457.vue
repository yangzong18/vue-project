<template>
    <div class="login-page">
        <nv-head page-type="登录"></nv-head>
        <section class="page-body">
            <div class="label">
                <input class="txt" type="text" placeholder="User Name" maxlength="36" v-model="accountForm.account ">
            </div>
            <div class="label">
                <input class="txt" type="password" placeholder="Password" maxlength="36" v-model="accountForm.password">
            </div>
            <div class="label">
                <input class="remember" type="checkbox" checked >
                <span>记住密码</span>
            </div>
            <div class="label">
                <a class="button" @click="loginon">登录</a>
            </div>
        </section>
    </div>
</template>
<script>
import nvHead from '../components/header.vue'
import $ from 'webpack-zepto';
import { Login } from "../api/api";
export default {
    name:'Login', 
    mounted() {
        document.title = this.$route.meta.title;
    },
    data(){
        return {
            accountForm: {
                account: 'walker1838',
                password: '123456'
            }
        }
    },
    components:{
        nvHead
    },
    methods:{
        loginon:function(){
            if (this.accountForm.username === '') {
                this.$alert('用户名不能为空');
                return false;
            }
            if (this.accountForm.password === '') {
                this.$alert('密码不能为空');
                return false;
            }
            
            Login(this.accountForm).then(response => {
				this.scroll = true;
				let { code, list } = response.data;
				if(code == 200 ) {
					let user = {
                            loginname: res.loginname,
                            avatar_url: res.avatar_url,
                            userId: res.id,
                            token: this.token
                        };
                    window.sessionStorage.user = JSON.stringify(user);
                    this    
				}
			  })

        }
    }
}
</script>
<style lang="scss">
.page-body {
        padding: 50px 15px;
        min-height: 400px;
        background-color: #fff;
        .label {
            display: inline-block;
            width: 100%;
            margin-top: 15px;
            position: relative;
            left: 0;
            top: 0;
            .txt {
                padding: 12px 0;
                border: none;
                border-bottom: 1px solid #4fc08d;
                background-color: transparent;
                width: 100%;
                font-size: 14px;
                color: #313131;
            }
            .button {
                display: inline-block;
                width: 99%;
                height: 42px;
                line-height: 42px;
                border-radius: 3px;
                color: #fff;
                font-size: 16px;
                background-color: #4fc08d;
                border: none;
                border-bottom: 2px solid #3aa373;
                text-align: center;
                vertical-align: middle;
            }
            .file {
                position: absolute;
                top: 0;
                left: 0;
                height: 42px;
                width: 48%;
                outline: medium none;
                opacity: 0;
            }
        }
    }
</style>
