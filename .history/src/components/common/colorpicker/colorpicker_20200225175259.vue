<template>
  <div class="colorpicker">
    <div class="colorlist" v-for="(item, index) in getColor">
      <!-- <div class="color-detail" v-for="(detail, index) in item" :style="{backgroundColor:'#' + detail}" :data-color="'#' + detail" @click="changeBg($event)">
      </div> -->
      <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </div>
  </div>
</template>
<script>
import store from '@/store'
export default {
  data () {
    return {
      color1: '#409EFF'
    }
  },
  methods: {
    changeBg (e) {
      store.dispatch({
        type: 'set_GlobaBglColor',
        data: e.target.getAttribute('data-color')
      })
      localStorage.setItem('globalInfo', JSON.stringify(store.getters.getGlobalInfo))
      this.$emit('isclose')
    }
    // showColor () {
    //   alert(JSON.stringify(this.color))
    // }
  },
  computed: {
    getColor () {
      // alert(this.color.length)
      let color = []
      let hex = ['00', '33', '66', '99', 'cc', 'ff']
      let c = ''
      let n = 0
      for (let i = 0; i < 6; i++) {
        n++
        color[n] = []
        for (let j = 0; j < 6; j++) {
          for (let k = 0; k < 6; k++) {
            c = hex[j] + hex[k] + hex[i]
            // this.color[n] = []
            // this.color[n].push(color)
            // console.log(n)
            color[n].push(c)
          }
        }
      }
      return color
    }
  },
  mounted () {
    // this.$nextTick(() => {

    // })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
  .colorpicker
    position:relative
    width:80%
    max-width:720px
    height:auto
    margin: 0 auto
    font-size:0
    overflow:auto
    .colorlist
      // display:flex
      // justify-content:center
      display:inline-block
      width:100%
      height:auto
      margin: 0 auto
      line-height:10px
      .color-detail
        width:20px
        height:20px
        display:inline-block
        border-radius:50%
        box-sizing:border-box
        cursor:pointer
        &:hover
          border:1px solid $text_color
</style>
