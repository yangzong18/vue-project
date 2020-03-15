<template>
    <div class="updatetips" ref="updatetips">
        <transition name="fade">
        <div class="update_mask"></div>
        </transition>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            showInfo:false,
        }
    }
}
</script>