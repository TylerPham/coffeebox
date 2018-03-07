<template>
    <div class="home-page">
        <h1>HomePage.vue</h1>
        <ul>Drinks
        
        <li v-for="drink in drinks">
            {{drink}}
        </li>

        </ul>

    </div>
</template>

<script>
export default {
  props: {
      drinks: {
          type: Array,
          default: () => []
      }
  }
}
</script>

