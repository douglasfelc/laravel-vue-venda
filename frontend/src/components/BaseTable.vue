<template>
  <table>
    <thead>
      <tr>
        <th scope="col" v-for="t, key in titles" :key="key">{{t}}</th>
      </tr>
    </thead>
    <tbody>
      <slot name="body"></slot>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['titles']
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #1167b1;
  color: white;
}
</style>
