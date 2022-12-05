<template>
  <div :class="baseClass">
    <slot></slot>

    <button @click="onClick()">
      X
    </button>
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: ''
    }
  },
  computed: {
    baseClass() {
      return [
          'alert',
          this.variant ? `alert-${this.variant}` : ''
      ]
    }
  },
  methods: {
    onClick() {
      // Envia o evento para o pai
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
.alert {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ff0000;
  background-color: #ddd;
  padding: 5px;
  border-radius: 6px;
}

.alert-warning {
  background-color: yellow;
  color: #fff;
}
.alert-danger {
  background-color: red;
  color: #fff;
}

.alert-success {
  background-color: green;
  color: #fff;
}
</style>