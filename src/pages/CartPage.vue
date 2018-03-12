<template>
<b-container text-center xs-6>
  <h1>My Order</h1>
  <b-row xs="12">

    <table class="table">
      <thead>
        <tr>
          <th>Drink and modifiers</th>
          <th>Price</th>
          <th class="text-right" >Remove Item</th>
          <!-- <th class="text-right">QTY</th> -->
        </tr>
      </thead>

      <tr v-for="(item, index) in cart" v-bind:key="index">
        <td>{{item.name}} {{showModifiers(item)}}</td>
        <td>{{drinkSubTotal(item)}}</td>
        <td><b-btn-close v-on:click="removeItem(index)"></b-btn-close></td>

        <!-- <td class="text-right">
            <b-form-input
            :type="'number'"
            :placeholder="drinkQuantity(item).toString()"
            name=""
            min = "0"
            >
            </b-form-input>
        </td> -->
      </tr>

      <tr>
        <td></td>
        <!-- <td></td> -->
        <td></td>
        <td class="text-right">
          <h4>Subtotal: ${{subTotal}}</h4>
          <h4>Tax: ${{tax}}</h4>
          <h4>Total: ${{totalPrice}}</h4>
        </td>
      </tr>
    </table>
  </b-row>

  <b-button
  class="float-right mx-2"
  variant="info"
  v-b-modal.paymentModal
  v-on:click="clearCart"
  v-if="itemCount > 0">
    Checkout
  </b-button>
  <b-button
  type="button"
  class="float-right mx-2"
  disabled
  v-else>
  Checkout</b-button>

  <b-btn class="float-right mx-2" v-on:click="clearCart">
    Clear Cart
  </b-btn>

  <!-- Payment Modal-->
  <b-modal id="paymentModal" title="Your Order has been Processed">
    <p class="my-4">Thank you for your order!</p>
    <b-link to="/">Back to menu</b-link>
  </b-modal>

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

  methods: {
    // calculate the individual drink's subtotal
    drinkSubTotal (drink) {
      let subtotal = drink.price
      drink.modifiers.forEach(function (modifier) {
        subtotal += modifier.price * modifier.quantity
      })
      return (subtotal).toFixed(2)
    },
    // format a string to display all of a drink's chosen modifiers
    showModifiers (drink) {
      let modifierString = ''
      drink.modifiers.forEach(modifier => {
        if (modifier.quantity > 0) {
          modifierString += ' + ' + modifier.quantity + 'x' + modifier.name
        }
      })

      return modifierString
    },

    // callback function to clear the cart
    clearCart () {
      this.$emit('clearCart')
    },

    // callback function to remove item at specified index
    removeItem (index) {
      this.$emit('removeItem', index)
    },

    drinkQuantity (drink) {
      let drinkCount = 0
      this.cart.forEach((item) => {
        if (this.isObjectEqual(drink, item)) {
          drinkCount += 1
        }
      })
      return drinkCount
    },

    isObjectEqual (a, b) {
      if (a.name !== b.name) {
        return false
      }

      if (a.price !== b.price) {
        return false
      }
      if (JSON.stringify(a.modifiers) !== JSON.stringify(b.modifiers)) {
        return false
      }

      return true
    }
  },

  computed: {
    // number of items in cart
    itemCount () {
      return this.cart.length
    },

    // subtotal of all items in cart
    subTotal () {
      let subTotal = 0
      this.cart.forEach(function (drink) {
        subTotal += drink.price
        drink.modifiers.forEach(function (modifier) {
          subTotal += (modifier.price * modifier.quantity)
        })
      })
      return (subTotal).toFixed(2)
    },

    // calculate the amount of tax from subtotal
    tax () {
      return (this.subTotal * 1.14 - this.subTotal).toFixed(2)
    },

    // calculate the total amount of the order
    totalPrice () {
      let total = parseFloat(this.subTotal) + parseFloat(this.tax)
      return total.toFixed(2)
    }
  }
}
</script>
