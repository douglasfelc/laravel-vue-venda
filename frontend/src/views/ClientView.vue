<template>
  <div class="client">
    <h1>Client</h1>

    <form method="POST" action="" @submit.stop.prevent="addClient()">
      <BaseCard title="Principal Information">
        <template v-slot:body>
          <label for="name">Name</label>
          <input required type="text" id="name" v-model="name">

          <label for="cpf">CPF</label>
          <input type="text" id="cpf" v-model="cpf">
        </template>
      </BaseCard>

      <BaseCard title="Contact Information">
        <template v-slot:body>
          <label for="phone">Phone</label>
          <input type="tel" id="phone" v-model="phone">

          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">

          <label for="address">Address</label>
          <input type="text" id="address" v-model="address">
        </template>
      </BaseCard>

      <BaseButton type="submit">
        <template v-slot>
          Save
        </template>
      </BaseButton>
    </form>

  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'

import axios from 'axios';

export default {
  data() {
    return {
      id: 0,
      name: '',
      cpf: '',
      phone: '',
      address: '',
      email: ''
    }
  },
  components: {
    BaseCard,
    BaseButton
  },
  methods: {

    addClient() {
      let formData = new FormData();
      formData.append('token', this.$store.state.token)
      formData.append('name', this.name)
      formData.append('cpf', this.cpf)
      formData.append('phone', this.phone)
      formData.append('address', this.address)
      formData.append('email', this.email)

      this.$store.dispatch('addClient', formData)
    },

    load() {

      if( this.$route.params.id ){
        this.id = this.$route.params.id

        let url = 'http://localhost:8000/api/v1/client/'+this.id

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': this.$store.state.token
          }
        }

        axios.get(url, config)
          .then(response => {
            let obj = response.data
            this.name = obj.name
            this.cpf = obj.cpf
            this.phone = obj.phone
            this.address = obj.address
            this.email = obj.email
          })
          .catch(error => {
              alert(error)
              console.log('Error: ' + error)
          })
      }

    }
  },
  mounted() {
    this.load()
  }
}
</script>
