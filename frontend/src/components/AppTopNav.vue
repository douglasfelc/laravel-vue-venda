<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/clients">Clients</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/postal-codes">Postal Codes</router-link>
    <router-link to="/payment-methods">Payment Methods</router-link>
    <router-link to="/sales">Sales</router-link>
    <router-link to="/user">Profile</router-link>
    <a href="#logout" @click="logout">Exit</a>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>
nav {
  overflow: hidden;
  background-color: #292f3a;
}

nav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

nav a:hover {
  background-color: #187bcd;
}

nav a.router-link-exact-active {
  background-color: #1167b1;
}
</style>
  