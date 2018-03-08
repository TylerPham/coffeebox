<template>
  <v-app>

  <div class="app">
    <div class="header">
      <Header></Header>
    </div>

    <div class="page"></div>
    <router-view :drinks="drinks"></router-view>

  </div>
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  },
  name: 'app',

  data() {
    return {
      // Stub out for async call stub
      drinks: ['D1', 'D2', 'D3']
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
