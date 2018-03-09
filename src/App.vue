<template>

  <div class="app">
    <div class="header">
      <Header></Header>
    </div>

    <div class="page"></div>
    <router-view 
    :drinks="drinks"
    :test="test"
    >
    
    </router-view>
    

  </div>
</template>

<script>
import Header from '@/components/Header'
const drinks = require("/home/tyler/documents/coffeebox/src/drinks.json") //change to async call after

export default {
  components: {
    Header
  },
  name: 'app',

  data() {
    return {
      // Stub out for async call stub
      drinks,
      cart: [''],
      subtotal: null
    }
  },
    methods: {
        test(){
            console.log("parent")
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
}
</style>
