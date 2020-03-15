<template>
    <div style="height: 100%;">
        <nv-head page-type="消息"></nv-head>
        message
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    import { mapGetters } from 'vuex';
    import nvHead } from "../components/header";
    export default {
        name:'Message',
        mounted() {
            document.title = this.$route.meta.title;
        },
        computed: {
            ...mapGetters({
                userInfo:'getUserInfo'
            })
        },
        components: {
            nvHead
        }
    };
</script>