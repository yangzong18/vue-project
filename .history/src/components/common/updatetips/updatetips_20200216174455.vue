<template>
    <div class="updatetips" ref="updatetips">
        <transition name="fade">
            <div class="update_mask"></div>
        </transition>
        <span class="updatetime">更新时间：</span>
        
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
    }
}
</script>