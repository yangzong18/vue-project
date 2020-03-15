<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
  </div>
</template>

<script>
import header from '@components/header/header.vue';
import sellerData from "@/common/json/seller.js";
export default {
  name: "app",
  data() {
    return {
      seller: {}
    };
  },
  created() {
    console.log(sellerData)
  },
  components:{
    'v-header':
  }
};
</script>

<style>
@import "./assets/css/public.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>