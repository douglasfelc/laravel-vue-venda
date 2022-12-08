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
import router from '@/router'

export default {
  components: {
    BaseTop,
    BaseButton,
    BaseTable
  },
  methods: {
    redirect(id) {
      router.push('/postal-code/'+id)
    }
  },
  created() {
    this.$store.dispatch('getPostalCodes')
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      router.push('/login')
    }
  }
}
</script>
