import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AllProduction from '../views/AllProduction.vue'
import ProductionLoyout from '../views/ProductionLoyout.vue'
import ProductPage from '../views/ProductPage.vue'
import Basket from '../views/Basket.vue'
const routes = [
  {
      path: '/',
      component: HomePage,
      name: 'homePage'
  },
  {
    path: '/productions',
    component: ProductionLoyout,
    name: 'production-loyout',
    children: [
      {
       path:'',
        component:AllProduction,
        name: 'productions'
      },
      {
        path:':id',
        component:ProductPage,
        name: 'product'
      },
      {
        path: '/basket',
        component: Basket,
        name: 'basket'
      }
    ]  
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
