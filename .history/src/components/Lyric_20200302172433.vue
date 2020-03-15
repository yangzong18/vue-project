<template>
  <div id="lyric">
    <p class="lyric-item" v-for="v in currentLyric">{{v}}</p>
  </div>
</template>
<script>
import Base64 from '../utils/base64'
export default {
  props: ["currentTime", "songid"],
  data() {
    return {
      lyric: null
    };
  },
  computed: {
    currentLyric: function () {
        if (this.lyric !== null) {
          let that = this
          let pastLyric = []
          let i = 0
          Object.keys(this.lyric).forEach(function (key) {
            if (key.split(':')
                .reduce((a, b) =>
                parseInt(a) * 60 * 100 + b
                  .split('.')
                  .reduce((a, b) =>
                  parseInt(a) * 100 + parseInt(b))) - 120 <= that.currentTimeStamp) {
              if (that.lyric[key] !== '\n') pastLyric.push(that.lyric[key])
            } else if (i <= 1 && that.lyric[key] !== '\n') {
              pastLyric.push(that.lyric[key])
              i++
            }
          })
          return pastLyric.slice(pastLyric.length - 4, pastLyric.length - 1)
        }
      },
  },
  watch: {
      songid: function (id) {
        this.$store.dispatch('getLyric', id)
          .then((responce) => {
            console.log(responce.data)
          var ret= response.data
          if(typeof ret === 'string'){
            var reg = /^\w+\(({[^()]+})\)$/
            var matches = ret.match(reg)
            if(matches){             
              ret = JSON.parse(matches[1])
            }
          }
          res.json(ret)
          console.log()
            this.lyric = Base64
              .decode(responce.data.lyric)
              .split('[')
              .slice(5)
              .map(str => {
                let t = str.split(']')
                return {[t[0]]: t[1]}
              })
              .reduce((a, b) => {
                return {...a, ...b}
              })
          })
      }
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