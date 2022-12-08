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
    component: () => import('../views/ClientsView.vue')
  },
  {
    path: '/client/:id',
    name: 'client',
    component: () => import('../views/ClientView.vue')
  },
  {
    path: '/new-client',
    name: 'new-client',
    component: () => import('../views/ClientView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: () => import('../views/ProductView.vue')
  },
  {
    path: '/postal-codes',
    name: 'postal-codes',
    component: () => import('../views/PostalCodesView.vue')
  },
  {
    path: '/postal-code/:id',
    name: 'postal-code',
    component: () => import('../views/PostalCodeView.vue')
  },
  {
    path: '/new-postal-code',
    name: 'new-postal-code',
    component: () => import('../views/PostalCodeView.vue')
  },
  {
    path: '/payment-methods',
    name: 'payment-methods',
    component: () => import('../views/PaymentMethodsView.vue')
  },
  {
    path: '/payment-method/:id',
    name: 'payment-method',
    component: () => import('../views/PaymentMethodView.vue')
  },
  {
    path: '/new-payment-method',
    name: 'new-payment-method',
    component: () => import('../views/PaymentMethodView.vue')
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import('../views/SalesView.vue')
  },
  {
    path: '/sale/:id',
    name: 'sale',
    component: () => import('../views/SaleView.vue')
  },
  {
    path: '/new-sale',
    name: 'new-sale',
    component: () => import('../views/SaleView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/user/:id',
    name: 'user-id',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/new-user',
    name: 'new-user',
    component: () => import('../views/UserView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
