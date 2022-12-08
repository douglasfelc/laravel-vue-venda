<template>
  <div class="sale">
    <h1>Sale</h1>

    <form method="POST" action="" @submit.stop.prevent="addSale()">
      <BaseCard title="Client">
        <template v-slot:body>
          <label for="client">Name</label>
          <select required id="client" v-model="client">
            <option v-for="c, key in $store.state.clients" :key="key" :value="c.id">{{ c.name }}</option>
          </select>
        </template>
      </BaseCard>

      <BaseCard title="Products">
        <template v-slot:body>
          <BaseTable :titles="['Product', 'Quantity', 'Price', 'Total', 'Actions']">
            <template v-slot:body>
              <tr v-for="i, ikey in items" :key="ikey">
                <td>
                  <select id="product" v-model="items[ikey].product">
                    {{ items[ikey].product }}
                    <option v-for="p, pkey in $store.state.products" :key="pkey" :value="p.id">{{ p.name }}</option>
                  </select>
                </td>
                <td>
                  <input type="text" id="quantity" name="quantity[]" placeholder="Quantity.." v-model="items[ikey].quantity" @change="totalizers()">
                </td>
                <td>
                  <input type="text" id="price" name="price[]" placeholder="Price.." v-model="items[ikey].price" @change="totalizers()">
                </td>
                <td>
                  <input disabled type="text" id="total" name="total[]" placeholder="Total.." v-model="items[ikey].total">
                </td>
                <td>
                  <button type="button" @click="delItem(ikey)">X</button>
                </td>
              </tr>
            </template>
          </BaseTable>
        </template>
        <template v-slot:footer>

          <div class="flex-container">
            <div class="new-product" >
              <BaseButton @click="addItem()">
                <template v-slot>
                  New product
                </template>
              </BaseButton>
            </div>
            <div class="total">
              Total: {{ total }}
            </div>
          </div>
          
        </template>
      </BaseCard>

      <BaseCard title="Payment Method">
        <template v-slot:body>
          <label for="payment_method">Type</label>
          <select required id="payment_method" v-model="payment_method">
            <option v-for="p, key in $store.state.payment_methods" :key="key" :value="p.id">{{ p.name }} ({{ p.installments }}x)</option>
          </select>
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
import BaseTable from '@/components/BaseTable.vue'
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'

import axios from 'axios';

export default {
  data() {
    return {
      id: 0,
      client: '',
      payment_method: '',
      total: 0,
      items: []
    }
  },
  components: {
    BaseCard,
    BaseTable,
    BaseButton
  },
  methods: {

    totalizers() {
      this.total = 0;
      for(let i = 0; i < this.items.length; i++){ 
        this.items[i].total = this.items[i].quantity * this.items[i].price
        this.total+= this.items[i].total
      }
    },

    addItem() {
      this.items.push({
        id: 0,
        product: '',
        quantity: 1,
        price: 0,
        total: 0,
      })

      this.totalizers()
    },

    delItem(k) {
      this.items.splice(k, 1)
      this.totalizers()
    },

    addSale() {
      let formData = new FormData();
      formData.append('token', this.$store.state.token)
      formData.append('client_id', this.client)
      formData.append('payment_methods_id', this.payment_method)
      formData.append('items', JSON.stringify(this.items))

      this.$store.dispatch('addSale', formData)
    },

    load() {

      if( this.$route.params.id ){
        this.id = this.$route.params.id

        let config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
            'Authorization': this.$store.state.token
          }
        }

        let url = 'http://localhost:8000/api/v1/sale/'+this.id
        axios.get(url, config)
          .then(response => {
            let obj = response.data
            this.client = obj.client_id
            this.payment_method = obj.payment_methods_id
          })
          .catch(error => {
              alert(error)
              console.log('Error: ' + error)
          })

          let url_item = 'http://localhost:8000/api/v1/sale-item-by-sale/'+this.id
          axios.get(url_item, config)
          .then(response => {
            let items = response.data

            this.total = 0;
            items.forEach((item) => {
              let total = (item.quantity * item.price);
              this.total+= total;

              this.items.push({
                id: item.id,
                product: item.product_id,
                quantity: item.quantity,
                price: item.price,
                total: total,
              })
            })

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
  created() {
    this.$store.dispatch('getClients')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getPaymentMethods')
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      router.push('/login/')
    }
  }
}
</script>

<style scoped>
.new-product {
  flex-grow: 1;
}

.total {
  flex-grow: 1; text-align: right; padding: 15px;
}
</style>
