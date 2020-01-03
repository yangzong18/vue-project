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
  comments:{
    cnHeader
  }
}
</script>

<style>
@import './assets/css/public.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>