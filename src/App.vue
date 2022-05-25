<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{countVal}}</p>  
   <TestStore /> 

   <router-view></router-view>

</template>

<script>
import TestStore from './components/testStore.vue'

export default {
  name: 'App',
  components: {
    TestStore
  },
  computed:{
    countVal(){
      return this.$store.state.count.content
    } 
  },
  mounted(){
    let api = "/user/list"
    this.axios.get(api).then((response) => {
      console.log(response.data)
    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
