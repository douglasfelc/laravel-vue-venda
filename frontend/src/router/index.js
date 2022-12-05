import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clients',
    name: 'clients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../views/ClientsView.vue')
  },
  {
    path: '/client/:id',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ '../views/ClientView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
  },
  {
    path: '/postal-codes',
    name: 'postal-codes',
    component: () => import(/* webpackChunkName: "postal-codes" */ '../views/PostalCodesView.vue')
  },
  {
    path: '/postal-code/:id',
    name: 'postal-code',
    component: () => import(/* webpackChunkName: "postal-code" */ '../views/PostalCodeView.vue')
  },
  {
    path: '/payment-methods',
    name: 'payment-methods',
    component: () => import(/* webpackChunkName: "payment-methods" */ '../views/PaymentMethodsView.vue')
  },
  {
    path: '/payment-method/:id',
    name: 'payment-method',
    component: () => import(/* webpackChunkName: "payment-method" */ '../views/PaymentMethodView.vue')
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import(/* webpackChunkName: "sales" */ '../views/SalesView.vue')
  },
  {
    path: '/sale/:id',
    name: 'sale',
    component: () => import(/* webpackChunkName: "sale" */ '../views/SaleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
