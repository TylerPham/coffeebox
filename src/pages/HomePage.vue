<template>
    <div class="home-page">
        <h1>HomePage.vue</h1>
        <!-- <ul>Drinks
        <li v-for="drink in drinks">
            {{drink}}
        </li>
        </ul> -->


      <div>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>




  </div>


    </div>
</template>

<script>
// import Vuetify from 'vuetify'
// Vue.use(Vuetify)

export default {
  props: {
      drinks: {
          type: Array,
          default: () => []
      }
  }
}
</script>


<style>
.drink-pic{
    width: 100px;
    height: 100px;
}
</style>

