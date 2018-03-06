import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'
import ProductPage from '@/pages/ProductPage'

Vue.use(Router)

// const routes = [
//   {path: '/', name: 'home', component: HomePage},
//   {path: '/cart', name: 'cart', component: CartPage},
//   {path: '/product/:id', name: 'product', component: ProductPage},
// ]

export default new Router({
  routes: [
    {path: '/', name: 'home', component: HomePage},
    {path: '/cart', name: 'cart', component: CartPage},
    {path: '/product/:id', name: 'product', component: ProductPage}
  ]
})
