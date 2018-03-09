<template>
    <div class="home-page">
        <h1>HomePage.vue</h1>
        <!-- <ul>Drinks
        <li v-for="drink in drinks">
            {{drink}}
        </li>
        </ul> -->


    <div id="drinkgrid" class="row row-content">
        <div v-for="drink in drinks.drinks" class="col-xs-12 col-sm-6">
            <b-card>
            <b-media>
                <img src="../assets/logo.png" slot="aside" height="100" width="100">      
                <!-- <b-img img-src="'../assets/logo.png'" slot="aside" blank blank-color="#ccc" width="100" alt="" /> -->
                <h5 class="mt-0">{{drink.name}} </h5>
                <h6>${{drink.price}}</h6>
                <p>{{drink.description}}
                </p>
                
            </b-media>

            <div v-for="modifier in drink.modifiers">
                <label class="checkbox-inline">
                    <input type="checkbox" name="modifier" value="" v-model="modifier.select">
                    <strong id="mName">{{modifier.name}}   </strong><span id="mPrice" class="badge"> ${{ modifier.price }}</span>
                </label>
            </div>

            <b-button class=float-right v-on:click="add(drink)">
                Add to Cart 
            </b-button>
            </b-card>

        </div>
    </div>



<!--
                    <div id="img" class="media-left media-middle">
                        <a href="#">
                            <img class="media-object img-thumbnail" v-bind:src="'./src/'+drink.src">
                        </a>
                    </div>
                    <div class="media-body">
                        <h3 id="dName" class="media-heading">{{drink.name}} <span id="dPrice" class="badge">${{drink.price }}</span></h3>
                        <div v-for="modifier in drink.modifiers" style="margin-bottom: 5px">
                            <label class="checkbox-inline">
                                <input type="checkbox" name="modifier" value="" v-model="modifier.select">
                                <strong id="mName">{{modifier.name}}   </strong><span id="mPrice" class="badge"> ${{ modifier.price }}</span>
                            </label>
                        </div>
                        <p><a class="btn btn-success btn-s" @click="add(drink)">Add to Order</a></p>
                    </div>
                </div>

-->

    </div>
</template>

<script>
export default {
  props: {
      drinks: {
          type: Array,
          default: () => []
      },
    cart:{
      type: Array,
      default: () => []
    }
  },

    methods: {
        add(drink){
            console.log(drink.name);
        }
    }
}
</script>

<style>
.drink-pic{
    width: 100px;
    height: 100px;
}

fieldset {
    border: 0;
}
</style>

