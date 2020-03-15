<template>
  <div class="rank">
    <ul>
      <li class="rank-item" v-for="item in topList" @click="showRank(item.id)">
        <div class="rank-media">
          <img v-lazy="item.picUrl"/>
          <span class="listen-count"> {{item.listenCount | listenCounts}} </span>
        </div>
        <div class="rank-info">
          <p class="rank-title"> {{item.topTitle}} </p>
          <p class="rank-songs" v-for="(song,index) in item.songList">
            {{index+1}}
            {{song.songname}}
            <span class="rank-singername">- {{song.singername}} </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topList:null
    }
  },
  methods:{
      showRank(){
          this.
      }
  },
  created(){
    this.$store.dispatch('getRankList').then((response) => {
      this.topList = response.data.data.topList
    })
  },
  filters:{
      listenCounts:num=>{
          return `${Math.round(num/1000)/10}万`
      }
  }
}
</script>
<style lang="scss" scoed>
.rank {
    width: 100%;
    ul {
        margin-top: 60px;
        padding: 10px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        list-style: none;
        .rank-item {
            display: flex;
            flex-direction: row;
            height: 100px;
            background-color:#fff;
            margin-bottom: 10px;
            box-shadow: 0 0 10px #DDD;
            border-radius: 5px;
            overflow: hidden;
            cursor: pointer; 
            .rank-media {
                position: relative;
                width: 100px;
                height: 100px;
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 5px;

                }
                .listen-count {
                    position: absolute;
                    bottom: 3px;
                    left: 5px;
                    color: #fff;

                }
            }
            .rank-info {
                padding: 5px 10px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .rank-title,.rank-songs {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .rank-songs {
                    font-size: 14px;
                    .rank-singername {
                        color: #8f8f8f;
                    }
                }

            }
        }
    }
}    
</style>