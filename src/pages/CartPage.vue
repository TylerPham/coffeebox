<template>
<b-container fluid>
  <h1>My Order</h1>
  <b-row xs="12">

    <table class="table">
      <thead>
        <tr>
          <th>Drink and modifiers</th>
          <th>Price</th>
        </tr>
      </thead>

      <!-- loop here -->
      <!-- <tr>
        <td>drink 1</td>
        <td>drink 1</td>
        <td>drink 1</td>
      </tr> -->
      <tr v-for="item in cart">
        <td>{{item.name}} {{showModifiers(item)}}</td>
        <td>{{drinkSubTotal(item)}}</td>
      </tr>



      <tr>
        <td></td>
        <td>
          <h4>Subtotal: ${{subTotal}}</h4>
          <h4>Tax: ${{tax}}</h4>
          <h4>Total: ${{totalPrice}}</h4>

        </td>
      </tr>
    </table>
  </b-row>

  <b-button class="float-right mx-2" v-on:click="toast">
    Checkout
  </b-button>
  <b-button class="float-right mx-2" v-on:click="clearCart">
    Cancel
  </b-button>



</b-container>


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

  methods:{
    drinkSubTotal(drink){
      let subtotal = drink.price
      drink.modifiers.forEach(function(modifier){
        subtotal += modifier.price * modifier.quantity;
      });
    return subtotal
    },
 
  showModifiers(drink){
    let modifierString = ""
    drink.modifiers.forEach(modifier => {
      if (modifier.quantity > 0){
        modifierString += " + " + modifier.quantity + "x" + modifier.name
      }
    });

    return modifierString
  },
  clearCart(){
          this.$emit("clearCart");
  },
  toast(){
    console.log("toasting")
    $vm.$toast("test")
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
        // console.log(subTotal)
        return subTotal
    },

    tax(){
      return (this.subTotal * 1.14 - this.subTotal).toFixed(2)
    },

    totalPrice(){
      let total = this.subTotal * 1.14
      return total.toFixed(2)
    },

  }
}
</script>
