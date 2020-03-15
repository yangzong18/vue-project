<template>
    <div>
        <nv-head page-type="主题" :show-menu="showMenu" :need-add="true" :fix-head="true"></nv-head>
        <section class="page">
            <h2 class="topic-title">2020年1月11日Node party@北京成功举办，附照片、视频和ppt</h2>
            
        </section>
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