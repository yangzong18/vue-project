<template>
    <div style="height: 100%;">
        <nv-head page-type="消息" :fix-head="true" :show-menu="showMenu" :message-count=""></nv-head>
        message
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    import { mapGetters } from 'vuex';
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