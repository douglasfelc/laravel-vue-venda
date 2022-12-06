import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NzAzMjAwNzAsImV4cCI6MTY3MDMyMzY3MCwibmJmIjoxNjcwMzIwMDcwLCJqdGkiOiJtOXBweW1VMGh5QTNtdGtSIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.HgUSdvFXOSf0n_PLxE4CPip-i7j6UhLFk0COsW_58P0',
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

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      data.delete('token');

      axios.post(url, data, config)
    .then(response => {
        console.log(response)

        /*
        let url = 'http://localhost:8000/api/v1/sale_item/'

        let formData = new FormData();
        formData.append('user_id', 1)
        formData.append('video_id', response._id)

        axios.post(url, formData, config)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                alert('Error: ' + error)
                console.log('Error: ' + error)
            })
        */

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
