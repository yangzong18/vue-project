<template>
    <div style="height: 100%;">
        message
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    export default {
        mounted() {
            document.title = this.$route.meta.title;
        },
        components: {
            nvHead
        }
    };
</script>