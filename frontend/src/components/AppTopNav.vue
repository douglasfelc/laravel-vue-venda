<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/client">Client</router-link>
    <router-link to="/product">Product</router-link>
    <router-link to="/postal-code">Postal Code</router-link>
    <router-link to="/payment-method">Payment Method</router-link>
    <router-link to="/sale">Sale</router-link>
  </nav>
</template>

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

nav a.active {
  background-color: #04AA6D;
  color: white;
}

nav a.router-link-exact-active {
  background-color: #1167b1;
}
</style>
  