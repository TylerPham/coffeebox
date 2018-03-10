<template>
  <div>

  <h1>Cartpage.vue</h1>
  {{cart}}
  {{itemCount}}
  {{subTotal}}
  {{totalPrice}}
  </div>

</template>


<script>
export default {
    props: {
      drinks: {
          type: Object,
          default: () => []
      },
      cart: {
        type: Array,
        default: () => []
      }
  },

  computed: {
    itemCount(){
      return this.cart.length
    },

    subTotal(){
      let subTotal = 0
      this.cart.forEach(function(drink){
        subTotal += drink.price
        drink.modifiers.forEach(function(modifier){
          subTotal += (modifier.price * modifier.quantity)
        })
      })
        console.log(subTotal)
        return subTotal
    },

    totalPrice(){
      let total = this.subTotal * 1.14
      return total.toFixed(2)
    },

    drinkSubTotal(drink){
      let subtotal = drink.price
      drink.modifiers.forEach(function(modifier){
        subtotal += modifier.price
      })
    }
  }
}
</script>
