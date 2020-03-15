<template>
  <div id="playing-list">
    <div class="title border-1px border-1px-after">
      <img :src="buttonImage" />
      <p class="title-text">顺序播放 1首歌曲</p>
      <p class="title-button" @touchend.prevent="hidePlayList" @click="hidePlayList">完成</p>
    </div>
    <div class="m-list">
      <ul >
        <li class="border-1px border-1px-after list-item">
          <div class="music-info">
            <p class="music-name">桥边姑娘</p>
            <p class="music-author">-花僮</p>
            <img
              
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsKQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiBpZm9udDsgc3JjOiB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LmVvdD8jaWVmaXgiKSBmb3JtYXQoImVtYmVkZGVkLW9wZW50eXBlIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUud29mZiIpIGZvcm1hdCgid29mZiIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnR0ZiIpIGZvcm1hdCgidHJ1ZXR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS5zdmcjaWZvbnQiKSBmb3JtYXQoInN2ZyIpOyB9CgpdXT48L3N0eWxlPjwvZGVmcz48ZyBjbGFzcz0idHJhbnNmb3JtLWdyb3VwIj48ZyB0cmFuc2Zvcm09InNjYWxlKDAuMTk1MzEyNSwgMC4xOTUzMTI1KSI+PHBhdGggZD0iTTEwMTcuNiAxNjYuNGMwLTI1LjYtMTkuMi00NC44LTQ0LjgtNDQuOC0yNS42IDAtNDQuOCAxOS4yLTQ0LjggNDQuOGwwIDBMOTI4IDEwMjRsODkuNiAwTDEwMTcuNiAxNjYuNCAxMDE3LjYgMTY2LjQgMTAxNy42IDE2Ni40ek01MS4yIDQyOC44QzI1LjYgNDI4LjggNi40IDQ0OCA2LjQgNDczLjZsMCAwTDYuNCAxMDI0bDg5LjYgMEw5NiA0NzMuNmwwIDBDOTYgNDQ4IDc2LjggNDI4LjggNTEuMiA0MjguOEw1MS4yIDQyOC44ek0zNTguNCAwQzMzMi44IDAgMzEzLjYgMTkuMiAzMTMuNiA0NC44bDAgMEwzMTMuNiAxMDI0bDg5LjYgMEw0MDMuMiA0NC44bDAgMEM0MDMuMiAxOS4yIDM4NCAwIDM1OC40IDBMMzU4LjQgMHpNNjY1LjYgMjc1LjJDNjQwIDI3NS4yIDYyMC44IDI5NC40IDYyMC44IDMyMGwwIDAgMCA3MDQgODkuNiAwTDcxMC40IDMyMGwwIDBDNzEwLjQgMjk0LjQgNjkxLjIgMjc1LjIgNjY1LjYgMjc1LjJMNjY1LjYgMjc1LjJ6TTY2NS42IDI3NS4yIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              alt="正在播放"
              class="music-playing"
            />
          </div>
          <div class="action-button">
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
  computed: {
    buttonImage() {
      console.log(def.PLAY_MODE_IMG[this.playMode]);
      return def.PLAY_MODE_IMG[this.playMode];
    },
    ...mapState({
      playList: state => state.PlayService.playList,
      playMode: state => state.PlayService.playMode
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
      padding-left: 10px;
    }
    .title-button {
      margin-right: 10px;
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