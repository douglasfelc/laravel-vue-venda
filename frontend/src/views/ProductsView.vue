<template>
  <div class="products">
    <h1>Products</h1>

    <BaseTable :titles="['Name', 'Quantity', 'Price', 'Actions']">
      <template v-slot:body>
        <tr v-for="p in $store.state.products" :key="p.id" @click="redirect(p.id)">
          <td>
            {{p.name}}
          </td>
          <td>
            {{p.quantity}}
          </td>
          <td>
            {{p.price}}
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
      window.open('/product/'+id, '_self')
    }
  },
  created() {
    this.$store.dispatch('getProducts')
  }
}
</script>
