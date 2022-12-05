<template>
  <div class="clients">
    <h1>Clients</h1>

    <BaseTable :titles="['Name', 'Email', 'Phone', 'Actions']">
      <template v-slot:body>
        <tr v-for="c in clients" :key="c.id" class="cursor-pointer" @click="redirect(c.id)">
          <td>
            {{c.name}}
          </td>
          <td>
            {{c.email}}
          </td>
          <td>
            {{c.phone}}
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
      clients: []
    }
  },
  components: {
    BaseTable
  },
  methods: {
    load() {
      // temp
      let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNTAzMzYsImV4cCI6MTY3MDI1MzkzNiwibmJmIjoxNjcwMjUwMzM2LCJqdGkiOiJjMFRvbjRzTHB4TlQwTHpTIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.XtUAk5E7wuY8SktjoxrHw-GRUT9hfZFqRDQwhxGsBMQ';

      let url = 'http://localhost:8000/api/v1/client/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': token
        }
      }

      axios.get(url, config)
        .then(response => {
          this.clients = response.data
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
      },
      redirect(id) {
        window.open('/client/'+id, '_self')
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
