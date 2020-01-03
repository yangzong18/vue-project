<template>
  <div id="app">
    <cn-header></cn-header>
    <router-view name=""></router-view>
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
@import './assets/css/public.css';
</style>