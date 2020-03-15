<template>
    <div>
        <nv-head page-type="主题" :show-menu="showMenu" :need-add="true" :fix-head="true"></nv-head>
        se
    </div>
</template>
<script>
import nvHead from "../components/header";
    export default {
        name:'Topic',
        data() {
            return {
                showMenu:false,
            }
        },
        components:{
            nvHead,
        }

    }
</script>