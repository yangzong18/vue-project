<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <h3>{{message}}</h3>
    <input type="text" v-model="itemNew" v-on:keyup.enter="addNew" />
    <ul>
      	<li v-for="item in items" v-bind:class="{isStudent:item.student}" @click="turnRed(item)">
		  {{ item.name }}
		</li>
    </ul>
  </div>
</template>

<script>
import Storage from "./localstorage.js";
export default {
  name: 'app',
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .isStudent{
  color: #900;
}
ul,li {
	list-style: none;
}
input {
	width: 200px;
	line-height: 20px;
	border: #000 solid 1px;
}
</style>