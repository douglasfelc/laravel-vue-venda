<template>
  <div class="postal-code">
    <h1>Postal Code</h1>

    <BaseCard>
      <template v-slot:body>
        Form
        Code: {{ code }}
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
      code: ''
    }
  },
  components: {
    BaseCard
  },
  methods: {
    load() {
      // temp
      let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNTAzMzYsImV4cCI6MTY3MDI1MzkzNiwibmJmIjoxNjcwMjUwMzM2LCJqdGkiOiJjMFRvbjRzTHB4TlQwTHpTIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.XtUAk5E7wuY8SktjoxrHw-GRUT9hfZFqRDQwhxGsBMQ';

      let url = 'http://localhost:8000/api/v1/postal-code/'+this.id

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
          this.code = obj.code
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
      },
      redirect() {
        window.open('/postal-codes/', '_self')
      }
    },
    mounted() {
      this.load()
    }
  }
</script>
