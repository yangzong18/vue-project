<template>
  <div id="playing-list">
    <div class="title border-1px border-1px-after">
      <img :src="buttonImage" />
      <p class="title-text">{{playModeName}} {{playList.length}} 首歌曲</p>
      <p class="title-button" @touchend.prevent="hidePlayList" @click="hidePlayList">完成</p>
    </div>
    <div class="m-list">
      <ul >
        <li class="border-1px border-1px-after list-item" v-for="(music,num) in playList">
          <div class="music-info">
            <p class="music-name"> {{music.name}} </p>
            <p class="music-author">- {{music.singer|singer}} </p>
            <img src="./../assets/icon-playing.svg" v-show="" alt="正在播放" class="music-playing"/>
          </div>
          <div class="action-button" @touchend.prevent="showMenu(num)" @click="showMenu(num)">
            <img
              
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA20lEQVRYw+3TsQqCQBwG8A8bQhRqOAsadDMH94aUJifX9mafwkcJnH0Lt1ahB6hBh4aCQAiiloQIu4awHL4f3PT/vju44wAiIiIioofID+LQsPKFPtqHhpVHfhB3prs0nczTRAHgVi9PE8XSdLJPB7Tejfwgfg09h2W38ZNuaFh5U6hej3mjtrsKAJyraih7Btm87a4CALqqHmVB2bztrgIApmOnnibKppCnidKc2um7TX7W7eov7tXB7emwDmdzfVxdxUTpX9yB2NmumyT5ZvXpkH91iYiIiOhrd4yRzGEoS8frAAAAAElFTkSuQmCC"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import * as def from "@/config/def";
export default {
    data() {
        return {
            musicIndex: 0
        }
    },
   methods:{
       hidePlayList(){
           this.$store.commit('closePlayingList');
       },
       showMenu(num){
        this.musicIndex = num;
        let that = this;
        this.$store.dispatch('notifyActionSheet',{
            menus:{
                'title.noop':`${this.playList[num].name}<br/><span style="color:#666;font-size:12px;">${this.getSingerStr(this.playList[num].singer)}</span>`,
                delete:'删除'
            },
            handler:{
            ['cancel'](){
            },
            ['delete'](){
              that.$store.commit('delFromPlayList', that.menuedIndex)
            }
          }
        })
       },
       getSingerStr(val){
        if (typeof val === 'string') {
          return val
        } else if (val instanceof Array) {
          let singer = ''
          val.forEach(item => {
            singer = singer + item.name + ' '
          })
          return singer
        }
      },
   },
  computed: {
    buttonImage() {
      return def.PLAY_MODE_IMG[this.playMode];
    },
    playModeName(){
return def.PLAY_MODE_IMG[this.playMode];
    },
    ...mapState({
      playList: state => state.PlayService.playList,
      playMode: state => state.PlayService.playMode,
      index:state => state.PlayService.index,
    })
  }
};
</script>
<style lang="scss" scoped>
#playing-list {
  z-index: 10;
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  .title {
    position: fixed;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    max-width: 68vh;
    z-index: 3;
    img {
      width: 25px;
      display: inline-block;
      cursor: pointer;
      padding-left: 10px;
    }
    .title-text {
      flex-grow: 1;
      padding-left: 5px;
    }
    .title-button {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .m-list {
      margin-top: 50px;
      ul {
          list-style: none;
          .list-item {
              height: 40px;
              padding: 5px 0;
              margin-left: 10px;
              display: flex;
              justify-content: space-between;
              flex-direction: row;
              .action-button {
                  width: 20px;
                  height: 20px;
                  padding: 10px;
                  img {
                      width: 20px;
                  }
              }
              .music-info {
                height: 40px;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                flex-grow: 1;
                cursor: pointer;
                align-items: center;
                .music-name,.music-author{
                    line-height: 20px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .music-author {
                    color: #8f8f8f;
                    font-size: 12px;
                }
                .music-playing {
                    width: 15px;
                    height: 15px;
                    margin-left: 10px;
                }
              }
          }
      }
  }
}
@media screen and (min-width: 68vh) {
  #playing-list {
    width: 68vh;
  }
}
</style>