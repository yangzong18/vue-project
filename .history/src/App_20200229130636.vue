<template>
  <div id="app">
    <search></search>
    <transition name="play-slide>
      <play v-show="playPageShow"></play>
    </transition>
  </div>
</template>
<script>
import '@/common/base.css'
import Search from "@/components/Search";
import Play from "@/components/Play";
export default {
  components:{
    Search
  }
}
</script>