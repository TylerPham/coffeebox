<template>

  <div class="app">
    <div class="header">
      <Header
      :cart="cart"
      ></Header>
    </div>

    <div class="page"></div>
    <router-view 
    :drinks="drinks"
    :cart="cart"
    v-on:clearCart="clearCart"
    v-on:addDrinkToCart="addDrinkToCart"
    >
    
    </router-view>
    

  </div>
</template>

<script>
import Header from '@/components/Header'
import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'
import Vue from 'vue'

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
      cart: [],
      subtotal: null
    }
  },

  components: {
    Header,
    HomePage,
    CartPage
  },

  methods: {
    addDrinkToCart(drink) {
      this.$data.cart.push(drink)
      Vue.toast(drink.name + " added to your cart" , {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: '1500',
        transition: 'slide-up'
      })
// console.log(this.$data.cart)
    },
    getDrinksList() {
      drink = require("/home/tyler/documents/coffeebox/src/drinks.json") //change to async call after
    },
    clearCart(){
      this.$data.cart = []
    }
  },
  created() {
    // console.log("started")
    // this.getDrinksList();
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
