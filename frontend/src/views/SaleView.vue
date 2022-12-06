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
          <BaseButton @click="addItem()">
            <template v-slot>
              New product
            </template>
          </BaseButton>

          Total: {{ total }}
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

import axios from 'axios';

export default {
  data() {
    return {
      id: this.$route.params.id,
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

        // temp
        let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAyNjc3NzgsImV4cCI6MTY3MDI3MTM3OCwibmJmIjoxNjcwMjY3Nzc4LCJqdGkiOiI0VExqQWltQUZCUnE2aE1lIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.EGcQdwSdwh2naaYc6CM2wbL97GTQDECDuVMzZ3H2w50';

        let url = 'http://localhost:8000/api/v1/sale/'+this.id

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
            this.client_ = obj.client_id
            this.payment_methods = obj.payment_methods_id
          })
          .catch(error => {
              alert(error)
              console.log('Error: ' + error)
          })
      }

    },
    redirect() {
      window.open('/sales/', '_self')
    }
  },
  mounted() {
    this.load()
  },
  created() {
    this.$store.dispatch('getClients')
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getPaymentMethods')
  }
}
</script>

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
