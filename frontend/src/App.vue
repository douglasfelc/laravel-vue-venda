<template>
  <AppTopNav/>
  <router-view/>
</template>

<script>
import AppTopNav from '@/components/AppTopNav.vue'

export default {
  name: 'App',
  components: {
    AppTopNav
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
