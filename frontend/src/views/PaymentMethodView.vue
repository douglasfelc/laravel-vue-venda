<template>
  <div class="payment-method">
    <h1>Payment Method</h1>

    <form method="POST" action="" @submit.stop.prevent="addPaymentMethod()">
      <BaseCard>
        <template v-slot:body>
          <label for="name">Name</label>
          <input required type="text" id="name" v-model="name">

          <label for="installments">Installments</label>
          <input required type="number" id="installments" v-model="installments">
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
      installments: 0
    }
  },
  components: {
    BaseCard,
    BaseButton
  },
  methods: {

    addPaymentMethod() {
      let formData = new FormData();
      formData.append('token', this.$store.state.token)
      formData.append('name', this.name)
      formData.append('installments', this.installments)

      this.$store.dispatch('addPaymentMethod', formData)
    },

    load() {

      if( this.$route.params.id ){
        this.id = this.$route.params.id

        let url = 'http://localhost:8000/api/v1/payment-method/'+this.id

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
            this.installments = obj.installments
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
