<template>
  <div id="app">
    <cn-header></cn-header>
    <router-view></router-view>
  </div>
</template>

<script>
import cnHeader from './components/Header.vue'
export default {
  name: 'app',
  components:{
    cnHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 20px;
}
</style>