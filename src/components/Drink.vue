<template>
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
            @change="modifierUpdate"
            :placeholder="'0'"
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
</template>

<script>
export default {
  props:{
      drink: {
          type: Object,
          default: ()=> {}
      }
  },
  methods: {
    addDrinkToCart(drink) {
      console.log(JSON.stringify(drink));
      this.$emit("addDrinkToCart", drink);
    },

    modifierUpdate(e){
        console.log("updated")
        // console.log(this[key])
        console.log(e)
        // console.log(e.currentTarget)
    }
  },
  data() {
    return {
      modifiers: [],
    }
  },
}
</script>
