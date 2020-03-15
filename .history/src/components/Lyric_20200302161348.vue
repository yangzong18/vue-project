<template>
  <div id="lyric">
    <p class="lyric-item" v-for="v in currentLyric">{{v}}</p>
  </div>
</template>
<script>
export default {
  props: ["currentTime", "songid"],
  data() {
    return {
      lyric: null
    };
  }
  
};
</script>
<style lang="scss">
#lyric {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  flex-grow: 1;
  .lyric-item {
    text-align: center;
    &:first-child,
    &:last-child {
      font-size: 14px;
      color: #4d4d4d;
    }
  }
}
</style>