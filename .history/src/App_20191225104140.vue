<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view></router-view> -->
    <h3>{{message}}</h3>
    <input type="text" v-model="itemName" v-on:keyup.enter="addNew" />
    <ul>
      
  </div>
</template>

<script>
import { Strorge } from "./localstorge";
export default {
  name: 'app',
  data:function(){
    return {
      message:'输入姓名，查看谁是学生',
      itemName:'',


    }
  },
  methods(){
    addNew:function(){

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>