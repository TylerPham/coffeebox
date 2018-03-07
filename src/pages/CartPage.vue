<template>
  <h1>Cartpage.vue</h1>
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
