<template>
  <div>
    <v-header v-bind:seller="seller"></v-header>
  </div>
</template>

<script>
import sellerData from '@/common/json/seller.js';
export default {
  name: 'app',
  data() {
    return {
      id: (() => {
            let queryParam = urlParse();
            console.log('urlParam');
            console.log(queryParam);
            return queryParam.id;
          })() // 这个是一个立即执行函数
    }
  },
}
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