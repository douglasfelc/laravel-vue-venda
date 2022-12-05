import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/client',
    name: 'client',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "client" */ '../views/ClientView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
  },
  {
    path: '/postal-code',
    name: 'postal-code',
    component: () => import(/* webpackChunkName: "postal-code" */ '../views/PostalCodeView.vue')
  },
  {
    path: '/payment-method',
    name: 'payment-method',
    component: () => import(/* webpackChunkName: "payment-method" */ '../views/PaymentMethodView.vue')
  },
  {
    path: '/sale',
    name: 'sale',
    component: () => import(/* webpackChunkName: "sale" */ '../views/SaleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
