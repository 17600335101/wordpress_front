<template>
  <div>
    <el-button @click="Tclick">+</el-button>
    <el-input v-model='$store.state.num'></el-input>
    <el-button @click="$store.dispatch('deferAdd')">-</el-button>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      Tclick(){
        this.$store.commit('addNum',{aa:10})
      }
    }
  }

</script>

<style scoped>

</style>