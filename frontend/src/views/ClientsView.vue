<template>
  <div class="clients">
    <BaseTop title="Clients">
      <template v-slot>
        <BaseButton redirect="/new-client">
          <template v-slot>
            New
          </template>
        </BaseButton>
      </template>
    </BaseTop>

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
      router.push('/client/'+id)
    }
  },
  created() {
    this.$store.dispatch('getClients')
  },
  beforeCreate() {
    if( !this.$store.state.token ){
      router.push('/login')
    }
  }
}
</script>
