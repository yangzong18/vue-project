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
        <div class="play-list-page">
            <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000003EHeM41Fs1hO.jpg?max_age=2592000" alt="" class="blurbg">
            <div class="play-list-info border-1px border-1px-after">
                <div class="play-list-photo">
                    <div class="play-button">
                        <img src="@/assets/icon-play.png">
                    </div>
                    <img src="http://y.gtimg.cn/music/photo_new/T002R300x300M000002tWYVP0wRK1I.jpg?max_age=2592000">
                </div>
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
        .search {
            width: 30px;
            height: 30px;
            margin: 10px;
            float: right;
            img {
                width: 30px;
            }
        }
    }
    .play-list-page
    .play-list-page-header {
        background: rgba(255, 255, 255, 0.8);
    }
}
</style>