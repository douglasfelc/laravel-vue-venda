<template>
  <div class="product">
    <h1>Product</h1>

    <BaseCard>
      <template v-slot:body>
        Form
        Name: {{ name }}
      </template>
      <template v-slot:footer>
        <button type="submit">Save</button>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue'

import axios from 'axios';

export default {
  data() {
    return {
      id: this.$route.params.id,
      name: '',
      quantity: '',
      price: ''
    }
  },
  components: {
    BaseCard
  },
  methods: {
    load() {
      // temp
      let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNjc3NzgsImV4cCI6MTY3MDI3MTM3OCwibmJmIjoxNjcwMjY3Nzc4LCJqdGkiOiI0VExqQWltQUZCUnE2aE1lIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EGcQdwSdwh2naaYc6CM2wbL97GTQDECDuVMzZ3H2w50';

      let url = 'http://localhost:8000/api/v1/product/'+this.id

      console.log(url);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': token
        }
      }

      axios.get(url, config)
        .then(response => {
          let obj = response.data
          this.name = obj.name
          this.quantity = obj.quantity
          this.price = obj.price
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
      },
      redirect() {
        window.open('/products/', '_self')
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
