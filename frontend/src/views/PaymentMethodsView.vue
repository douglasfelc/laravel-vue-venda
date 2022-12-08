<template>
  <div class="payment-methods">
    <BaseTop title="Payment Methods">
      <template v-slot>
        <BaseButton redirect="/new-payment-method">
          <template v-slot>
            New
          </template>
        </BaseButton>
      </template>
    </BaseTop>

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
import BaseTop from '@/components/BaseTop.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseTable from '@/components/BaseTable.vue'
import router from '@/router'

export default {
  data() {
    return {
      payment_methods: []
    }
  },
  components: {
    BaseTop,
    BaseButton,
    BaseTable
  },
  methods: {
    redirect(id) {
      router.push('/payment-method/'+id)
    }
  },
  created() {
    this.$store.dispatch('getPaymentMethods')
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      router.push('/login')
    }
  }
}
</script>
