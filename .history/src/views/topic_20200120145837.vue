<template>
    <div>
        <nv-head page-type="主题" :show-menu="showMenu" :need-add="needAdd" :fix-hea></nv-head>
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