<template>
    <div class="updatetips" ref="updatetips">
        <transition name="fade">
        <div class="update_mask"></div>
        </transition>
        
    </div>
</template>
<script>
export default {
    name:''
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