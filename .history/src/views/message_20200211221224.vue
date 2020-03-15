<template>
    <div style="height: 100%;">
        <nv-head page-type="消息" :fix-head="true" :show-menu="showMenu" :message-count="no_read_len" :need="true"></nv-head>
        <div class="page">
            <ul class="tabs">
                <li class="item" :class='{"selected":selectItem == 2}' @click="changeItem(2)">已读消息</li>
                <li class="item" :class='{"selected":selectItem == 1}' @click="changeItem(1)">未读消息</li>
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
            get
        },
        methods: {
            changeItem(idx){
                this.selectItem = idx;
                this.currentData = idx === 1 ? this.message.hasnot_read_messages : this.message.has_read_messages;
                this.noData = this.currentData.length === 0;
            }
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