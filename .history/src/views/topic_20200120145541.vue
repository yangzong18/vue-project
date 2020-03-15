<template>
    <div>
        <nv-head :page-type="主题"></nv-head>
    </div>
</template>
<script>
import nvHead from "../components/header";
    export default {
        name:'topic',
        data() {
            return {
                
            }
        },
        components:{
            nvHead,
        }

    }
</script>