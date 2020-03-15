<template>
    <div class="album">
        <div class="header play-list-page-header">
            <div class="back-button">
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
    .header {
        width: 100%;
        max-width: 68vh;
        height: 50px;
        position: fixed;
        top: 0;
        z-index: 1;
        .back-button {
            height: 25px;
            margin: 12.5px;
            margin-left: 5px;
            float: left;
            cursor: pointer;
            .back-icon {
                width: 25px;
                height: 25px;
                float: left;
                img {
                    width: 25px;
                }
            }
            .back-text {
                line-height: 25px;
                float: left;
            }
            
        }
    }
    .play-list-page-header {
        background: rgba(255, 255, 255, 0.8);
    }
}
</style>