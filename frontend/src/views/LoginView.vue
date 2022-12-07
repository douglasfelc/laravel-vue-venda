<template>
  <div class="client">
    <h1>Log Into Vendas</h1>

    <form method="POST" action="" @submit.stop.prevent="login()">
      <BaseCard>
        <template v-slot:body>
          <label for="email">Email</label>
          <input required type="email" id="email" v-model="email">

          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
        </template>
      </BaseCard>

      <BaseButton type="submit">
        <template v-slot>
          Log In
        </template>
      </BaseButton>
    </form>

  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    BaseCard,
    BaseButton
  },
  methods: {
    login() {
      let formData = new FormData();
      formData.append('email', this.email)
      formData.append('password', this.password)

      this.$store.commit('login', formData)
    }
  },
}
</script>

<style>
.client {
  padding: 200px 200px;
}
</style>
