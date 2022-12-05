<template>
  <div class="sales">
    <h1>Sales</h1>

    <BaseTable :titles="['Client', 'Payment Method', 'Actions']">
      <template v-slot:body>
        <tr v-for="s in sales" :key="s.id" class="cursor-pointer" @click="redirect(s.id)">
          <td>
            {{s.client_id}}
          </td>
          <td>
            {{s.payment_methods_id}}
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
      sales: []
    }
  },
  components: {
    BaseTable
  },
  methods: {
    load() {
      // temp
      let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNTAzMzYsImV4cCI6MTY3MDI1MzkzNiwibmJmIjoxNjcwMjUwMzM2LCJqdGkiOiJjMFRvbjRzTHB4TlQwTHpTIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.XtUAk5E7wuY8SktjoxrHw-GRUT9hfZFqRDQwhxGsBMQ';

      let url = 'http://localhost:8000/api/v1/sale/'

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
          this.sales = response.data
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
      },
      redirect(id) {
        window.open('/sale/'+id, '_self')
      }
    },
    mounted() {
      this.load()
    }
  }
</script>