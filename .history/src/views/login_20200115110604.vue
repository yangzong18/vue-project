<template>
    <div class="login-page">
        <nv-head page-type="登录">
        </nv-head>
        <section class="page-body">
            <div class="label">
                <input class="txt" type="text" placeholder="Access Token" maxlength="36">
            </div>
            <div class="label">
                <a class="button">登录</a>
            </div>
        </section>
    </div>
</template>
<script>
import nvHeader from '@/compo'
export default {
    name:'Login',
}
</script>