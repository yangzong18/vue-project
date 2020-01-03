<template>
  <div id="app">
    <img src="./assets/logo.png">
    <cm-header></cm-header>
    <router-view></router-view>
  </div>
</template>

<script>
import cmHeader from './components/Header.vue'
export default {
  name: 'app',
  comm
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