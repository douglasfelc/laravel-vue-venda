import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'

export default createStore({
  state: {
    token: '',
    clients: {},
    payment_methods: {},
    postal_codes: {},
    products: {},
    sales: {}
  },
  getters: {
  },
  mutations: {

    login(context, data) {
      let url = 'http://localhost:8000/api/v1/login/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      }

      axios.post(url, data, config)
        .then((response) => {
          let token = 'Bearer '+response.data.token
          localStorage.setItem('token', token)
          window.open('/', '_self')
        })
        .catch(error => {
          alert(error)
          console.log('Error: ' + error)
        })
    },

    logout(state) {
      state.token = '';
      localStorage.removeItem('token')
      window.open('/login', '_self')
    },

    initializeStore(state) {
      if(localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
      }
    },

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

    addUser(context, data) {
      let url = 'http://localhost:8000/api/v1/user/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      axios.post(url, data, config)
        .then(() => {
          alert('Successful User Registration')
          router.push('/login')
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },
    
    addClient(context, data) {
      let url = 'http://localhost:8000/api/v1/client/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      data.delete('token');

      axios.post(url, data, config)
        .then(() => {
          alert('Successful Client Registration')
          router.push('/clients')
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    addPostalCode(context, data) {
      let url = 'http://localhost:8000/api/v1/postal-code/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      data.delete('token');

      axios.post(url, data, config)
        .then(() => {
          alert('Successful Postal Code Registration')
          router.push('/postal-codes')
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    addProduct(context, data) {
      let url = 'http://localhost:8000/api/v1/product/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      data.delete('token');

      axios.post(url, data, config)
        .then(() => {
          alert('Successful Product Registration')
          router.push('/products')
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

    addPaymentMethod(context, data) {
      let url = 'http://localhost:8000/api/v1/payment-method/'

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'Authorization': data.get('token')
        }
      }

      data.delete('token');

      axios.post(url, data, config)
        .then(() => {
          alert('Successful Payment Method Registration')
          router.push('/payment-methods')
        })
        .catch(error => {
            alert(error)
            console.log('Error: ' + error)
        })
    },

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
          router.push('/sales')
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
