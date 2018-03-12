<template>
<div class="home-page">
  <h1 class="text-center p-3">Drinks</h1>

  <div id="drinkgrid" class="row row-content">
    <div v-for="drink in drinks.drinks" class="col-xs-12 col-sm-6" v-bind:key="drink.id">
      <b-card>
        <b-media>
          <!-- <img class="drink-pic" src="@/assets/logo.png" slot="aside"> -->
          <!-- <img class="drink-pic" :src="require('@/assets/coffee.jpg')" slot="aside"> -->
          <b-img 
          thumbnail 
          class="drink-pic" 
          :src="drink.src" 
          alt="../assets/logo.png"
          slot="aside"
          ></b-img>
          
          <h5 class="mt-0">{{drink.name}} </h5>
          <h6>${{drink.price}}</h6>
          <p>{{drink.description}}
          </p>
        </b-media>

        <b-container fluid class="my-3">
          <h6>Drink Options</h6>
            <b-row class="my-1" v-for="(modifier, index) in drink.modifiers" v-bind:key="index">

        <b-col sm="3">
            <label>
                {{modifier.name}}
            </label>
        </b-col>

        <b-col sm="9">
            <b-form-input
            :type="'number'"
            :placeholder="'0'"
            name="modifier"
            min = "0"
            v-model="modifier.quantity"
            >
            </b-form-input>
        </b-col>
        </b-row>
        </b-container>

        <b-container fluid>
          <b-button class=float-right v-on:click="addDrinkToCart(drink)">
            Add to Cart
          </b-button>
        </b-container>
      </b-card>
      <!-- <Drink :drink='drink'></Drink> -->
    </div>
  </div>
</div>

</template>

<script>

export default {
components: {
  },
  props: {
    drinks: {
      type: Object,
      default: () => {}
    },
    cart: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    //callback function to create drink object with selected modifiers to add to the cart
    addDrinkToCart(drink) {

      let cartDrink = {}
      cartDrink.name = drink.name
      cartDrink.price = drink.price
      cartDrink.modifiers = []

      if(drink.modifiers.length > 0){
        for (let i = 0; i < drink.modifiers.length; i++){
            const name = drink.modifiers[i].name
            const price = drink.modifiers[i].price
            const quantity = parseInt(drink.modifiers[i].quantity)

            const modifier = {name, price, quantity}
            cartDrink.modifiers.push(modifier)
            //reset the form after submitting
            drink.modifiers[i].quantity = 0
        }
      }
      //callback to parent to add the drink to the cart state
      this.$emit("addDrinkToCart", cartDrink);
    },

    getPic(drink){
      console.log(drink.src)
      // require("@" + drink.src + ".jpg")
    }
  }
}
</script>

<style>
.drink-pic {
  width: 150px;
  height: 150px;
}

fieldset {
  border: 0;
}
</style>

