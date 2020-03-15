<template>
    <div class="album">
        <div class="header play-list-page-header">
            <div class="back-icon">
                <img src="@/assets/icon-back.svg">
            </div>
            <div class="back-text">
            专辑
            </div>
        </div>
        <div class="search">
            <img src="@/assets/icon-search.png">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.album {
    position: absolute;
    z-index: 2;
    top: 0;
    background-color: #fff;
    width: 100%;
    max-width: 68vh;
    height: 100%;
    .play-list-page-header {
        background: rgba(255, 255, 255, 0.8);
    }
}
</style>