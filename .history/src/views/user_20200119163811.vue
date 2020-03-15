<template>
    <div>
        <nv-head page-type="用户信息" :show-menu="false"></nv-head>
        <section class="userinfo">
            <img :src="user.avatar_url" alt="" class="u-img"><br>
            <span class="u-name" v-text="user.loginname"></span>
            <div class="u-bottom">
                <span class="u-time" v-text="getLastTimeStr(true)"></span>
                <span class="u-score">积分：{{user.score}}</span>
            </div>
        </section>


    </div>
</template>
<script>
import $ from 'webpack-zepto';
import nvHead from '../components/header.vue';
import {getPersonCenter} from '../api/api';
export default {
    name:'User',
    data() {
        return {
            user:[],
            currentData:[],
            selectItem: 1

        }
    },
    mounted() {
		document.title = this.$route.meta.title;
        this.getUser();
	},
    beforeRouteLeave(to, from, next) {
		$(window).off('scroll');
		next();
    },
	beforeRouteEnter(to, from, next) {
		next();
	},
    methods: {
        getUser(){
            let loginname = this.$route.params.loginname;
             if (!loginname) {
                this.$alert('缺少用户名参数');
                this.$router.push({
                    name: '/'
                });
                return false;
            }
            let params = {loginname:loginname};
            
            getPersonCenter(params).then(response=>{
                let { code, info } = response.data;
                console.log(info)
				if(code == 200 ) {
                    this.user = info;
                    if (info.recent_replies.length > 0) {
                        this.currentData = info.recent_replies;
                    } else {
                        this.currentData = info.recent_topics;
                        this.selectItem = 2;
                    }
				}
            })
            
        }
    },
    components:{
        nvHead
    },
    watch: {
        '$route'(to,from){
            this.getUser();
        }
    },
}
</script>
