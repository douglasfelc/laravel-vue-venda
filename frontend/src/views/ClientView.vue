<template>
  <div class="client">
    <h1>Client</h1>

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
      cpf: '',
      phone: '',
      address: '',
      email: ''
    }
  },
  components: {
    BaseCard
  },
  methods: {
    load() {
      // temp
      let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNjc3NzgsImV4cCI6MTY3MDI3MTM3OCwibmJmIjoxNjcwMjY3Nzc4LCJqdGkiOiI0VExqQWltQUZCUnE2aE1lIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EGcQdwSdwh2naaYc6CM2wbL97GTQDECDuVMzZ3H2w50';

      let url = 'http://localhost:8000/api/v1/client/'+this.id

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
          this.cpf = obj.cpf
          this.phone = obj.phone
          this.address = obj.address
          this.email = obj.email
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
      },
      redirect() {
        window.open('/clients/', '_self')
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
