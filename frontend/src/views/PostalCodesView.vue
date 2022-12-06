<template>
  <div class="postal-codes">
    <BaseTop title="Postal Codes">
      <template v-slot>
        <BaseButton redirect="/new-postal-code">
          <template v-slot>
            New
          </template>
        </BaseButton>
      </template>
    </BaseTop>

    <BaseTable :titles="['Code', 'Actions']">
      <template v-slot:body>
        <tr v-for="p in $store.state.postal_codes" :key="p.id" @click="redirect(p.id)">
          <td>
            {{p.code}}
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
      window.open('/postal-code/'+id, '_self')
    }
  },
  created() {
    this.$store.dispatch('getPostalCodes')
  }
}
</script>
