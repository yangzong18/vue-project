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
            <img :src="albumImgUrl" alt="" class="blurbg">
            <div class="play-list-info border-1px border-1px-after">
                <div class="play-list-photo">
                    <div class="play-button">
                        <img src="@/assets/icon-play.png">
                    </div>
                    <img v-lazy="albumImgUrl">
                </div>
                <div class="play-list-text">
                    <p class="play-list-name">{{album.name}}
                        <span class="play-list-num">-{{album.singername}}</span>
                    </p>
                    <p class="play-list-num">{{album.list.length}}首歌曲</p>
                    <p class="play-list-num">{{album.genre}}&nbsp;&nbsp;{{album.lan}}</p>
                    <p class="play-list-num">发行时间:{{album.aDate}}</p>
                    <p class="play-list-num">唱片公司:{{album.company}}</p>
                </div>
            </div>
            <div class="m-list">
                <ul>
                    <li class="list-item border-1px border-1px-after" v-for="(song,index) in album.list" :key="index">
                        <div class="music-info">
                            <p class="music-name"> {{song.songorig}} </p>
                            <p class="music-author" v-if="song.singer.length > 0">
                                <span v-for="(singer,index2)in song.singer" :key="index2">{{singer.name}}</span>
                                <span>{{song.albumdesc}}</span>
                            </p>
                        </div>
                        <div class="action-button" @touchend.prevent="showMenu(index)" @click="showMenu(index)">
                            <img src="@/assets/icon-...black.png">
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            album: null,
            menuedIndex: 0,
            mid: this.$route.params.id,

        }
    },
    computed:{
        albumImgUrl() {
            return 'http://y.gtimg.cn/music/photo_new/T002R300x300M000' + this.mid + '.jpg?max_age=2592000'
        }
    },
    created(){
        this.$store.dispatch('getAlbum',this.mid).then((response)=>{
            this.album = response.data.data
        })
    }
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
    .play-list-page {
        margin-top: 50px;
        .blurbg {
            display: block;
            filter: blur(30px);
            position: absolute;
            top: 0;
            left:0;
            z-index: 0;
            width: 100%;
        }
        .play-list-info {
            height: 110px;
            position: relative;
            padding-bottom: 10px;
            background: rgba(255, 255, 255, 0.8);
            padding-left: 15px;
            display: flex;
            flex-direction: row;
            .play-list-photo {
                position: relative;
                width: 110px;
                height: 110px;
                .play-button {
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    bottom: 10px;
                    right: 10px;
                    box-shadow: 0 0 0 1px #d8d8d8;
                    z-index: 1;
                    img {
                        width: 15px;
                        height: 15px;
                        margin: 7.5px;
                        margin-left: 9px;
                    }
                }
                img {
                    width: 110px;
                    height: 110px;
                }
            }
            .play-list-text {
                padding-left: 5px;
                .play-list-num {
                    line-height: 18px;
                    font-size: 12px;
                    color: #8f8f8f;
                }
            }
        }
        .m-list {
            background: rgba(255, 255, 255, 0.8);
            ul {
                list-style: none;
                .list-item {
                    padding-left: 15px;
                    padding-right: 10px;
                    height: 40px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    background: rgba(255, 255, 255, 0.8);
                    display: flex;
                    flex-direction: row;
                    cursor: pointer;
                    .music-info {
                        height: 40px;
                        overflow: hidden;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        .music-name {
                            line-height: 20px;
                            margin-right: 20px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                        .music-author {
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            color: #8f8f8f;
                            font-size: 12px;
                            line-height: 20px;
                            margin-right: 20px;
                            overflow: hidden;
                        }
                    }
                }
                .action-button {
                    width: 20px;
                    height: 20px;
                    padding: 10px 0;
                    img {
                        width: 25px;
                    }
                }
            }
        }
        
    }
    
    .play-list-page-header {
        background: rgba(255, 255, 255, 0.8);
    }
}
</style>