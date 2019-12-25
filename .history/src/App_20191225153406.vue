<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view></router-view> -->
    <h3>{{message}}</h3>
    <input type="text" v-model="itemNew" v-on:keyup.enter="addNew" />
    <ul>
      	<li v-for="item in items">
		  {{ item.name }}
		</li>
    </ul>
  </div>
</template>

<script>
import Storage from "./localstorage.js";
export default {
  name: 'app',
  data:function(){
    return {
      message:'输入姓名，查看谁是学生',
      itemNew:'',
      items:Storage.getList(),
    }
  },
  methods:{
    addNew:function () {
  		this.items.push({
  			name : this.itemNew,
  			student : false
  		});
  		//清空文本栏
  		this.itemNew = null;
  	}
  },
  watch:{
  	items:{
	  	handler: function (items) {
	      Storage.add(items);//监控li变化，将新增的值存入 sessionStorage 里
	    },										//sessionStorage 里的数据将在页面关闭后删除
	  	deep:true							//深度监视，只要 items 有一点改变就会触发回调函数handler
  	}
  }
}
</script>

<style scoped>

</style>>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>