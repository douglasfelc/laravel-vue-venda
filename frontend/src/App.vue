<template>
  <AppTopNav v-if="$store.state.token" />
  <router-view/>
</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue'

export default {
  name: 'App',
  components: {
    AppTopNav
  },
  created() {
    document.title = "Vendas App"
  },
  mounted() {
    this.$store.commit('initializeStore')
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
