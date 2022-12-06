<template>
  <div class="payment-methods">
    <h1>Payment Methods</h1>

    <BaseTable :titles="['Name', 'Installments', 'Actions']">
      <template v-slot:body>
        <tr v-for="p in $store.state.payment_methods" :key="p.id" @click="redirect(p.id)">
          <td>
            {{p.name}}
          </td>
          <td>
            {{p.installments}}
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

export default {
  data() {
    return {
      payment_methods: []
    }
  },
  components: {
    BaseTable
  },
  methods: {
    redirect(id) {
      window.open('/payment-method/'+id, '_self')
    }
  },
  created() {
    this.$store.dispatch('getPaymentMethods')
  }
}
</script>
