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

    <BaseTable :titles="['Created', 'Client', 'Payment Method', 'Actions']">
      <template v-slot:body>
        <tr v-for="s in $store.state.sales" :key="s.id" class="cursor-pointer" @click="redirect(s.id)">
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

export default {
  components: {
    BaseTop,
    BaseButton,
    BaseTable
  },
  methods: {
    redirect(id) {
      window.open('/sale/'+id, '_self')
    }
  },
  created() {
    this.$store.dispatch('getSales')
  }
}
</script>