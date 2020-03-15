<template>
  <div class="recommand">
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

  },
  created(){
    this.$store.dispatch('getRankList').then((response) => {
      this.topList = response.data.data.topList
    })
  }
}
</script>