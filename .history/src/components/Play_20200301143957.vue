<template>
  <div id="play" class="play-music-page">
    <div class="music-album">
      <div class="play-page-hide-btn">
        <img src="@/assets/icon-jiantou.png" alt />
      </div>
      <img src="/static/img/Vue_Music_Blur.f29e504.png" lazy="loaded" />
    </div>
    <div class="button-group">
      <img class="blurbg" src="/static/img/Vue_Music_Blur.f29e504.png" />
      <div class="progress-bar-group">
        <div class="progress-bar">
          <div class="progress" :style="{width:indicatorPosition+'%'}"></div>
          <div class="indicater" :style="{left:indicatorPosition+'%'}"></div>
        </div>
        <div class="time-indicater">
          <span>0:00</span>
          <span>0:00</span>
        </div>
      </div>
      <div class="music-info">
        <p class="music-name">VUE MUSIC</p>
        <p class="music-author"></p>
      </div>
      <div class="lyric">
        <div id="lyric">
          <p class="lyric-item">When I see your monsters</p>
          <p class="lyric-item">And chase them all away</p>
          <p class="lyric-item">I&amp;apos;ll chase them all away</p>
        </div>
      </div>
      <div class="music-ctrl">
        <ul>
          <li>
            <img src="@/assets/icon-like.png" />
          </li>
          <li>
            <img src="@/assets/icon-shangyiqu.png"/>
          </li>
          <li>
            <img :src="playing?$parent.iconPause:$parent.iconPlay"/>
          </li>
          <li>
            <img src="@/assets/icon-xiayiqu.png"/>
          </li>
          <li>
            <img src="@/assets/icon-list.png"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
        .blurbg {
            position: absolute;
            z-index: -1;
            filter: blur(50px);
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
                    height: 12px;
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
        flex-flow: 2;
        display: flex;
        flex-direction: column;
        #lyric {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            flex-grow: 1;
            .lyric-item {
                text-align: center;
                &:first-child,&:last-child {
                    font-size: 14px;
                    color: #4d4d4d;
                }
            }
        }
    }

}
</style>