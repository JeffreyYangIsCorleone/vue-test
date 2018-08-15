<template>
  <div class="home">
    <p>Hello World! {{msg}}</p>
    <button v-on:click="greet">点击</button>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'Welcome To My HomePage!'
    }
  },
  methods:{
    greet(){
      axios.get(this.HOST+'/demo/test').then(function(response){
        alert(response);
      }).catch(function(response){
        alert(response);
      })
    }
  }
}
</script>