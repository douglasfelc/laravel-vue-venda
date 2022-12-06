import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAzNTE0NDksImV4cCI6MTY3MDM1NTA0OSwibmJmIjoxNjcwMzUxNDQ5LCJqdGkiOiJpQUZPYzB3eU9wWWdjVk85Iiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.--2jcmTKsKwkOQDiUe2afATXrANBZDQwGHXrLF-4sug',
    clients: {},
    payment_methods: {},
    postal_codes: {},
    products: {},
    sales: {}
  },
  getters: {
  },
  mutations: {
    storeClients(state, payload) {
      state.clients = payload
    },
    storePaymentMethods(state, payload) {
      state.payment_methods = payload
    },
    storePostalCodes(state, payload) {
      state.postal_codes = payload
    },
    storeProducts(state, payload) {
      state.products = payload
    },
    storeSales(state, payload) {
      state.sales = payload
    }
  },
  actions: {

    addSale(context, data) {
      let url = 'http://localhost:8000/api/v1/sale/'
      let url_item = 'http://localhost:8000/api/v1/sale-item/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      let items = JSON.parse(data.get('items'))

      data.delete('token');
      data.delete('items');

      axios.post(url, data, config)
        .then(response => {
          console.info(response.data.id)

          items.forEach((item) => {
            let formData = new FormData();
            formData.append('sales_id', response.data.id)
            formData.append('product_id', item.product)
            formData.append('quantity', item.quantity)
            formData.append('price', item.price)

            axios.post(url_item, formData, config)
              .then(function(response) {
                console.log(response)
              })
              .catch(function(error) {
                console.log(error);
              });

          })

          alert('Successful sale')
          window.open('/sales', '_self')
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    getSales({ commit, state }) {
      let url = 'http://localhost:8000/api/v1/sale/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': state.token
        }
      }

      return axios.get(url, config)
        .then(response => {
          commit('storeSales', response.data)
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    getProducts({ commit, state }) {
      let url = 'http://localhost:8000/api/v1/product/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': state.token
        }
      }

      return axios.get(url, config)
        .then(response => {
          commit('storeProducts', response.data)
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    getPostalCodes({ commit, state }) {
      let url = 'http://localhost:8000/api/v1/postal-code/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': state.token
        }
      }

      return axios.get(url, config)
        .then(response => {
          commit('storePostalCodes', response.data)
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    getPaymentMethods({ commit, state }) {
      let url = 'http://localhost:8000/api/v1/payment-method/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': state.token
        }
      }

      return axios.get(url, config)
        .then(response => {
          commit('storePaymentMethods', response.data)
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    getClients({ commit, state }) {
      let url = 'http://localhost:8000/api/v1/client/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': state.token
        }
      }

      return axios.get(url, config)
        .then(response => {
          commit('storeClients', response.data)
        })
        .catch(error => {
          alert(error)
          console.log('Error: ' + error)
        })
    },
  },
  modules: {
  }
})
