<template>
    <div class="updatetips" ref="updatetips">
        <transition name="fade">
            <div class="update_mask"></div>
        </transition>
        <span class="updatetime">更新时间 : {{updateInfo.updatetime}}</span>
        
    </div>
</template>
<script>
export default {
    name:'updatetips',
    data(){
        return {
            showInfo:false,
            updateInfo:{}
        }
    },
    props:{
        defaultValue:{
            type:Object,
            default:{}
        }
    },
    methods:{
        unUpdate () {
  			this.showInfo = false
  			// 添加cookie方便以后过期再弹窗
  			DGlobal.storage.setCookie('update', this.updateInfo.version, 60 * 60 * 2 * 1000)
  		},
    }
}
</script>