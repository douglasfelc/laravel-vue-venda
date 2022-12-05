<template>
  <div class="card">
    <h5 class="card-header">
      {{ title }}
    </h5>

    <div class="card-body">
      <slot name="body"></slot>
    </div>

    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #eeeeee;
  padding: 15px;
}

.card-header {
  font-size: 1.4rem;
  font-weight: 300;
  padding-bottom: 5px;
  border-bottom: 1px solid #dbdbdb;
  margin: 0px;
}

.card-body {
  padding-top: 15px;
  padding-bottom: 15px;
}

.card-footer {
  padding-top: 5px;
  border-top: 1px solid #dbdbdb;
}
</style>
