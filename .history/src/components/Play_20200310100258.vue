<template>
  <div id="play" class="play-music-page">
    <div class="music-album">
      <div class="play-page-hide-btn" @click="hidePlayPage" @touchend.prevent.stop="hidePlayPage">
        <img src="@/assets/icon-jiantou.png" alt />
      </div>
      <img v-lazy="coverImgUrl"/>
    </div>
    <div class="button-group">
      <img class="blurbg" :src="coverImgUrl"/>
      <div class="progress-bar-group">
        <div class="progress-bar">
          <div class="progress" :style="{width:indicatorPosition+'%'}" ></div>
          <div class="indicater" :style="{left:indicatorPosition+'%'}"></div>
        </div>
        <div class="time-indicater">
          <span> {{currentTime}} </span>
          <span> {{duration}} </span>
        </div>
      </div>
      <div class="music-info">
        <p class="music-name"> {{song.name}} </p>
        <p class="music-author"> {{song.singer | singer}} </p>
      </div>
      <div class="lyric">
        <lyric :songid="song.id" :currentTime="currentTime"></lyric>
      </div>
      <div class="music-ctrl">
        <ul>
          <li>
            <img src="@/assets/icon-like.png" />
          </li>
          <li>
            <img src="@/assets/icon-shangyiqu.png" @touchend.prevent.stop="playFront" @click="playFront"/>
          </li>
          <li>
            <img :src="playing ? $parent.iconPause :$parent.iconPlay" @click="$parent.tapButton" @touchend="$parent.tapButton"/>
          </li>
          <li>
            <img src="@/assets/icon-xiayiqu.png" @touchend.prevent.stop="playNext" @click="playNext"/>
          </li>
          <li>
            <img src="@/assets/icon-list.png" @touchend.prevent.stop="showPlayList" @click="showPlayList"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Lyric from '@/components/Lyric.vue';
import {mapMutations, mapState, mapGetters} from 'vuex'
export default {
    methods:{
        hidePlayPage(){
          this.$parent.playPageShow = false;
        },
        showPlayList() {
            this.$store.commit('showPlayingList')
        },
          // 点击跳转位置
        clickProgress (e) {
          const l = e.offsetX
          const w = document.getElementsByClassName('progress').offsetWidth
          console.log(l)
          console.log(w)
          // ele.currentTime = Math.floor(l / w * durationT)
        },
        ...mapMutations(['play','pause','playFront','playNext'])
    },
    components:{
        Lyric
    },
    computed:{
        ...mapGetters([
            'currentTime','duration','coverImgUrl'
        ]),
        ...mapState({
            indicatorPosition:state=> state.PlayService.currentTime/state.PlayService.duration * 100,
            playing:state=> state.PlayService.playing,
            song:state=> state.PlayService.song
        })
    },
};
</script>
<style lang="scss">
.play-music-page {
    position: fixed;
    width: 100%;
    max-width: 68vh;
    height: 100%;
    top: 0;
    z-index: 5;
    .music-album {
        max-height: 68vh;
        height: 100vw;
        width: 100%;
        img {
            width: 100%;
            display: block;
        }
        .play-page-hide-btn {
            width: 25px;
            height: 25px;
            top: 27px;
            left:11px;
            position: absolute;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            z-index: 1;
            justify-content: center;
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
                width: 12px;
                height: 12px;
                display: inline-block;
            }

        }
    }
    .button-group {
        width: 100%;
        position: absolute;
        left: 0;
        background:rgba(255, 255, 255,0.76);
        overflow: hidden;
        display:flex;
        flex-direction: column;
        bottom: 0;
        top: 100vw;
        .blurbg {
            position: absolute;
            z-index: -1;
            filter: blur(30px);
            width: 100%;
            display: block;
        }
        .progress-bar-group {
            height: 30px;
            .progress-bar {
                background-color: #ccc;
                height: 4px;
                position: relative;
                .progress {
                    height: 100%;
                    background-color: #7f7f7f;
                }
                .indicater {
                    width: 2px;
                    position: absolute;
                    height: 4px;
                    background: red;
                    top:0;
                }
            }
            .time-indicater {
                font-size: 12px;
                line-height: 16px;
                margin-top:8px;
                span {
                    padding: 0 10px;
                    &:last-child {
                        float: right;
                    }
                }
            }
        }
        .music-info {
            .music-name {
                font-size: 18px;
                text-align: center;
                font-weight: bold;
            }
            .music-author {
                font-size: 12px;
                text-align: center;
                color: #8f8f8f;
            }
        }
        .lyric {
            min-height: 35px;
            flex-grow: 2;
            display: flex;
            flex-direction: column;
    
            
        }
        .music-ctrl {
            height: 50px;
            ul {
                list-style: none;
                width: 100%;
                height: 100%;
                li {
                    float: left;
                    width: 20%;
                    height: 100%;
                    img {
                        display: block;
                        width: 35px;
                        margin: 0 auto;
                    }
                }
            }
        }

    }

    @media screen and (min-width: 68vh) {
        .music-album {
            height: 68vh;
        }

        .button-group {
            top: 68vh;
            width: 68vh;
            margin: 0 auto;
            margin-left: -34vh;
            left: 50%;
        }
    }
    

}
</style>