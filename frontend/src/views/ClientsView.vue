<template>
  <div class="clients">
    <h1>Clients</h1>

    <BaseTable :titles="['Name', 'Email', 'Phone', 'Actions']">
      <template v-slot:body>
        <tr v-for="c in $store.state.clients" :key="c.id" @click="redirect(c.id)">
          <td>
            {{c.name}}
          </td>
          <td>
            {{c.email}}
          </td>
          <td>
            {{c.phone}}
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
      window.open('/client/'+id, '_self')
    }
  },
  created() {
    this.$store.dispatch('getClients')
  }
}
</script>
