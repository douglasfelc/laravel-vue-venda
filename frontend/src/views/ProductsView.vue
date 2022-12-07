<template>
  <div class="products">
    <BaseTop title="Products">
      <template v-slot>
        <BaseButton redirect="/new-product">
          <template v-slot>
            New
          </template>
        </BaseButton>
      </template>
    </BaseTop>

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
      window.open('/product/'+id, '_self')
    }
  },
  created() {
    this.$store.dispatch('getProducts')
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      window.open('/login', '_self')
    }
  }
}
</script>
