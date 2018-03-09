<template>
    <div class="header-links">
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/cart">Cart</router-link> -->

<!--  <v-toolbar>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/cart" flat>Cart</v-btn>
    </v-toolbar-items>
  </v-toolbar>
-->

<b-navbar toggleable="md" type="dark" variant="info">
  <b-navbar-brand>CoffeeBox</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/cart">Cart ({{cart.length}})</b-nav-item>
    </b-navbar-nav>
</b-navbar>

<!-- navbar-1.vue -->

    </div>



</template>

<script>
export default {
  props: {
    cart:{
      type: Array,
      default: () => []
    }
  }
}
</script>
