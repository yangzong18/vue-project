<template>
  <div class="hello">
      欢迎来到人员管理
    <!-- <h1>{{ msg }}</h1> -->
    <footer-nav v-bind:class="{'isIndex':isNowPage}"></footer-nav>
  </div>
</template>

<script>
import footer from '../../components/footer.vue'
export default {
    name:'Index',
    components: {
        'footer-nav':footer
    },
    data() {
        return {
            isNowPage:true
        }
    },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
