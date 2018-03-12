<template>
<div class="header-links">
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand>CoffeeBox</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/cart">Cart ({{cart.length}})</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      default: () => []
    }
  }
}
</script>
