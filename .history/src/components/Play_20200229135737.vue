<template>
  <div id="play" class="play-music-page">
    <div class="music-album">
      <div class="play-page-hide-btn">
        <img src="@/assets/icon-jiantou.png" alt />
      </div>
      <img src="/static/img/Vue_Music_Blur.f29e504.png" lazy="loaded" />
    </div>
    <div class="button-group">
      <img class="blurbg" :src="coverImgUrl" />
      <div class="progress-bar-group">
        <div class="progress-bar">
          <div class="progress" :style="{width:indicatorPosition+'%'}"></div>
          <div class="indicater" :style="{left:indicatorPosition+'%'}"></div>
        </div>
        <div class="time-indicater">
          <span>{{currentTime}}</span>
          <span>{{duration}}</span>
        </div>
      </div>
      <div class="music-info">
        <p class="music-name">VUE MUSIC</p>
        <p class="music-author"></p>
      </div>
      <div class="lyric">
        <lyric :songid="song.id" :currentTime="currentTime"></lyric>
      </div>
      <div class="music-ctrl">
        <ul>
          <li>
            <img src="../assets/icon-like.png" />
          </li>
          <li>
            <img
              src="../assets/icon-shangyiqu.png"
              @touchend.prevent="playFront"
              @click="playFront"
            />
          </li>
          <li>
            <img
              :src="playing?$parent.iconPause:$parent.iconPlay"
              @click="$parent.tapButton"
              @touchend="$parent.tapButton"
            />
          </li>
          <li>
            <img src="../assets/icon-xiayiqu.png" @touchend.prevent="playNext" @click="playNext" />
          </li>
          <li>
            <img
              src="../assets/icon-list.png"
              @touchend.prevent="showPlayList"
              @click="showPlayList"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>