<template>
  <div class="postal-code">
    <h1>Postal Code</h1>

    <form method="POST" action="" @submit.stop.prevent="addPostalCode()">
      <BaseCard>
        <template v-slot:body>
          <label for="code">Code</label>
          <input required type="text" id="code" v-model="code">
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
      code: ''
    }
  },
  components: {
    BaseCard,
    BaseButton
  },
  methods: {

    addPostalCode() {
      let formData = new FormData();
      formData.append('token', this.$store.state.token)
      formData.append('code', this.code)

      this.$store.dispatch('addPostalCode', formData)
    },

    load() {

      if( this.$route.params.id ){
        this.id = this.$route.params.id

        let url = 'http://localhost:8000/api/v1/postal-code/'+this.id

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
            this.code = obj.code
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
