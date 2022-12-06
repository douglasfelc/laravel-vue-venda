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
    component: () => import(/* webpackChunkName: "clients" */ '../views/ClientsView.vue')
  },
  {
    path: '/client/:id',
    name: 'client',
    component: () => import(/* webpackChunkName: "client" */ '../views/ClientView.vue')
  },
  {
    path: '/new-client',
    name: 'new-client',
    component: () => import(/* webpackChunkName: "new-client" */ '../views/ClientView.vue')
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
    path: '/new-product',
    name: 'new-product',
    component: () => import(/* webpackChunkName: "new-product" */ '../views/ProductView.vue')
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
    path: '/new-postal-code',
    name: 'new-postal-code',
    component: () => import(/* webpackChunkName: "new-postal-code" */ '../views/PostalCodeView.vue')
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
    path: '/new-payment-method',
    name: 'new-payment-method',
    component: () => import(/* webpackChunkName: "new-payment-method" */ '../views/PaymentMethodView.vue')
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
  },
  {
    path: '/new-sale',
    name: 'new-sale',
    component: () => import(/* webpackChunkName: "new-sale" */ '../views/SaleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
