<template>
    <el-row>
        <el-button @click="add">加+1</el-button>
        <el-button type="primary" @click="sub">减-1</el-button>
    </el-row>

    <el-row>
        <el-button @click="go('/a')">GO A</el-button>
        <el-button type="primary" @click="go('/b')">GO B</el-button>
    </el-row> 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    add(){
       this.$store.dispatch('count/countAddAction')
    },
    sub(){
       this.$store.dispatch('count/countCubtractAction')
    },
    go(a){
      this.$router.push(a)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
