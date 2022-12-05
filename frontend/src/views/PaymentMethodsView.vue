<template>
  <div class="payment-methods">
    <h1>Payment Methods</h1>

    <BaseTable :titles="['Name', 'Installments', 'Actions']">
      <template v-slot:body>
        <tr v-for="p in payment_methods" :key="p.id" class="cursor-pointer" @click="redirect(p.id)">
          <td>
            {{p.name}}
          </td>
          <td>
            {{p.installments}}
          </td>
          <td>
          </td>
        </tr>
      </template>
    </BaseTable>
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable.vue'

import axios from 'axios';

export default {
  data() {
    return {
      payment_methods: []
    }
  },
  components: {
    BaseTable
  },
  methods: {
    load() {
      // temp
      let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNTAzMzYsImV4cCI6MTY3MDI1MzkzNiwibmJmIjoxNjcwMjUwMzM2LCJqdGkiOiJjMFRvbjRzTHB4TlQwTHpTIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.XtUAk5E7wuY8SktjoxrHw-GRUT9hfZFqRDQwhxGsBMQ';

      let url = 'http://localhost:8000/api/v1/payment-method/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': token
        }
      }

      axios.get(url, config)
        .then(response => {
          console.log(response.data)
          this.payment_methods = response.data
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
      },
      redirect(id) {
        window.open('/payment-method/'+id, '_self')
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
