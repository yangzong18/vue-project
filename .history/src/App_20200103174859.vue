<template>
  <div id="app">
    <cn-header></cn-header>
    <router-view name="main"></router-view>
    <router-view name="left-sild"></router-view>
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
@import './assets/css/public.css';
</style>