<template>
  <div id="Stock">

    <table>
      <tr>
        <th>Product</th>
        <th>Before game</th>
        <th>Transfer in</th>
        <th>Transfer out</th>
        <th>Final Count</th>
      </tr>

      <div v-for="product in products" :key="product">
        <td>{{product}}</td>
        <td><input v-model="beforeGameCount[products.indexOf(product)]"></td>
        <td><input v-model="transferInCount[products.indexOf(product)]"></td>
        <td><input v-model="transferOutCount[products.indexOf(product)]"></td>
        <td><input v-model="finalCount[products.indexOf(product)]"></td>
      </div>
    </table>
  </div>
</template>

<script>

export default ({
  name: 'Stock',
  props: {
    products: Array
  },
  data () {
    return {
      beforeGameCount: [],
      transferInCount: [],
      transferOutCount: [],
      finalCount: []
    }
  },
  created () {

  }
})
</script>

<style scoped>
table, th, td {
  border: 1px, solid black;
  border-collapse: collapse;
}

th, td {
  border: 1px, solid black
}
</style>
