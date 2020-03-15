<template>
    <div style="height: 100%;">
        <nv-head page-type="消息" :fix-head="true" :show-menu="showMenu" :message-count="no_read_len" :need="true"></nv-head>
        <div class="page">
            <ul class="tabs">
                <li class="item" :select>已读消息</li>
                <li class="item">未读消息</li>
            </ul>
        </div>
        message
    </div>
</template>
<script>
    import nvHead from '../components/header.vue';
    import { mapGetters } from 'vuex';
    export default {
        name:'Message',
        data() {
            return {
                showMenu:false,
                selectItem:2,
                message:{},
                noData:false,
                currentData:[],
                no_read_len:0
            }
        },
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