<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
  </div>
</template>

<script>
import sellerData from 'common/json/seller.js';
export default {
  name: 'app'
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