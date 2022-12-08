<template>
  <div class="home">
    <h1>Home page</h1>

    <BaseCard title="Welcome to AppVendas">
      <template v-slot:body>
        For a guide and recipes on how to configure / customize this project
      </template>
      <template v-slot:footer>
        <a href="https://github.com/douglasfelc/laravel-vue-venda" target="_blank" rel="noopener">Access documentation</a>
      </template>
    </BaseCard>

  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import router from '@/router'

export default {
  components: {
    BaseCard
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      router.push('/login')
    }
  }
}
</script>

