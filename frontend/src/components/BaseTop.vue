<template>
  <div class="top">
    <h1>
      {{ title }}
    </h1>
    <div class="slot">
      <slot></slot>
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
.top {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  margin: 0;
}

.slot {
  padding: 0 10px;
  display: flex;
  align-items: center;
}
</style>
