<template>
  <div class="sales">
    <BaseTop title="Sales">
      <template v-slot>
        <BaseButton redirect="/new-sale">
          <template v-slot>
            New
          </template>
        </BaseButton>
      </template>
    </BaseTop>

    <BaseTable :titles="['Number', 'Created', 'Client', 'Payment Method', 'Actions']">
      <template v-slot:body>
        <tr v-for="s in $store.state.sales" :key="s.id" @click="redirect(s.id)">
          <td>
            {{s.id}}
          </td>
          <td>
            {{s.created_at}}
          </td>
          <td>
            {{s.client_id}}
          </td>
          <td>
            {{s.payment_methods_id}}
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
  components: {
    BaseTop,
    BaseButton,
    BaseTable
  },
  methods: {
    redirect(id) {
      router.push('/sale/'+id)
    }
  },
  created() {
    this.$store.dispatch('getSales')
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      router.push('/login')
    }
  }
}
</script>