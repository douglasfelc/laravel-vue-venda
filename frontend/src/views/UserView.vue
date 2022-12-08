<template>
  <div class="user">
    <h1>User</h1>

    <form method="POST" action="" @submit.stop.prevent="addUser()">
      <BaseCard>
        <template v-slot:body>
          <label for="name">Name</label>
          <input required type="text" id="name" v-model="name">

          <label for="email">Email</label>
          <input required type="email" id="email" v-model="email">

          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">

          <label for="confirm_password">Confirm Password</label>
          <input type="password" id="confirm_password" v-model="(confirm_password)">
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
      email: '',
      password: '',
      confirm_password: ''
    }
  },
  components: {
    BaseCard,
    BaseButton
  },
  methods: {

    addUser() {

      if( this.password != this.confirm_password ){
        alert('The passwords entered do not match');
        return;
      }

      let formData = new FormData();
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('password', this.password)

      this.$store.dispatch('addUser', formData)
    },

    load() {

      // Get user by id
      if( this.$route.params.id ){
        this.id = this.$route.params.id

        let url = 'http://localhost:8000/api/v1/user/'+this.id

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
            this.email = obj.email
          })
          .catch(error => {
              alert(error)
              console.log('Error: ' + error)
          })
      } 
      
      // User logged
      else if( this.$store.state.token ){
        let url = 'http://localhost:8000/api/v1/me'

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': this.$store.state.token
          }
        }

        axios.post(url, '', config)
          .then(response => {
            let obj = response.data
            this.name = obj.name
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
  },
  beforeCreate() {
    /*if( !this.$store.state.token ){
      window.open('/login', '_self')
    }*/
  }
}
</script>
