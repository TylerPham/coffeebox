<template>
<div class="home-page">
  <h1>HomePage.vue</h1>

  <div id="drinkgrid" class="row row-content">
    <div v-for="drink in drinks.drinks" class="col-xs-12 col-sm-6" v-bind:key="drink.id">

<!--
<div class="media">
                    <div id="img" class="media-left media-middle">
                            <img class="media-object img-thumbnail" v-bind:src="'./src/'+drink.src">
                            <img class="media-object img-thumbnail" src="../assets/logo.png">  
                    </div>
                    <div class="media-body">
                        <h3 id="dName" class="media-heading">{{drink.name}} <span id="dPrice" class="badge">${{drink.price }}</span></h3>
                        <div v-for="modifier in drink.modifiers" style="margin-bottom: 5px">
                            <label class="checkbox-inline">
                                <input type="checkbox" name="modifier" value="" v-model="modifier.select">
                                <strong id="mName">{{modifier.name}}   </strong><span id="mPrice" class="badge"> ${{ modifier.price }}</span>
                            </label>
                        </div>
                        <p><a class="btn btn-success btn-s" @click="addDrinkToCart(drink)">Add to Order</a></p>
                    </div>
</div>

-->

      <b-card>
        <b-media>
          <img src="../assets/logo.png" slot="aside" height="100" width="100">
          <!-- <b-img img-src="'../assets/logo.png'" slot="aside" blank blank-color="#ccc" width="100" alt="" /> -->
          <h5 class="mt-0">{{drink.name}} </h5>
          <h6>${{drink.price}}</h6>
          <p>{{drink.description}}
          </p>
        </b-media>

        <b-container fluid>
          <h6>Drink Options</h6>
            <b-row class="my-1" v-for="modifier in drink.modifiers">

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
import Drink from '@/components/Drink.vue'

export default {
components: {
    Drink
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
        }
      }
      //callback to parent to add the drink to the cart state
      this.$emit("addDrinkToCart", cartDrink);
    },
  }
}
</script>

<style>
.drink-pic {
  width: 100px;
  height: 100px;
}

fieldset {
  border: 0;
}
</style>

