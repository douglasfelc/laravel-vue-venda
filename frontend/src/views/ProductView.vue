<template>
  <div class="product">
    <h1>Product</h1>

    <form method="POST" action="" @submit.stop.prevent="addProduct()">
      <BaseCard>
        <template v-slot:body>
          <label for="name">Name</label>
          <input required type="text" id="name" v-model="name">

          <label for="quantity" title="Quantity in stock">Quantity</label>
          <input required type="text" id="quantity" v-model="quantity">

          <label for="price">Price</label>
          <input required type="text" id="price" v-model="price">
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
      quantity: '',
      price: ''
    }
  },
  components: {
    BaseCard,
    BaseButton
  },
  methods: {

    addProduct() {
      let formData = new FormData();
      formData.append('token', this.$store.state.token)
      formData.append('name', this.name)
      formData.append('quantity', this.quantity)
      formData.append('price', this.price)

      this.$store.dispatch('addProduct', formData)
    },

    load() {

      if( this.$route.params.id ){
        this.id = this.$route.params.id

        let url = 'http://localhost:8000/api/v1/product/'+this.id

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
            this.quantity = obj.quantity
            this.price = obj.price
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
    if( !this.$store.state.token ){
      window.open('/login', '_self')
    }
  }
}
</script>
