<template>
    <div style="height: 100%;">
        message
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    import { mapGetters } from 'vuex'
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