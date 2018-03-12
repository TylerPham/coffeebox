import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/HomePage'
import CartPage from '@/pages/CartPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      data: []
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    }
  ]
})
