<template>
  <div class="postal-codes">
    <h1>Postal Codes</h1>

    <BaseTable :titles="['Code', 'Actions']">
      <template v-slot:body>
        <tr v-for="p in $store.state.postal_codes" :key="p.id" class="cursor-pointer" @click="redirect(p.id)">
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
import BaseTable from '@/components/BaseTable.vue'

export default {
  components: {
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
