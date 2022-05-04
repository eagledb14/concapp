<template>
  <div id="Stock" class="flex-column">

    <table class="table-auto border-collapse">
      <tr class="m-5">
        <th>Product</th>
        <th>Unit</th>
        <th>Current Stock</th>
        <th>Amount Requested</th>
      </tr>

      <tr v-for="product in products" :key="product">
        <td class="text-center m-5">{{product}}</td>
        <td class="text-center"> {{ units[products.indexOf(product)] }}</td>
        <!-- <td><input class="text-center" type="text" v-model="beforeGameCount[products.indexOf(product)]"></td>
        <td><input class="text-center" type="text" v-model="transferInCount[products.indexOf(product)]"></td>
        <td><input class="text-center" type="text" v-model="transferOutCount[products.indexOf(product)]"></td>
        <td><input class="text-center" type="text" v-model="finalCount[products.indexOf(product)]"></td> -->
        <td><input class="text-center" type="number" v-model="current[products.indexOf(product)]"></td>
        <td><input class="text-center" type="number" v-model="requested[products.indexOf(product)]"></td>
      </tr>
    </table>
    <button @click="sendItems(standName)">Submit</button>
  </div>
</template>

<script>
import axios from 'axios'

export default ({
  name: 'Stock',
  props: {
    standName: String,
    products: Array,
    units: Array
  },
  data () {
    return {
      oldStand: '',
      current: [],
      requested: []
    }
  },
  methods: {
    async sendItems (standName) {
      try {
        await axios.put('/api/product', {
          user: this.getUsersName,
          stand: standName,
          units: this.units,
          products: this.products,
          current: this.current,
          requested: this.requested
        })
      } catch (e) {
        console.log(e.response.data.message)
      }
    },
    async getItems () {
      try {
        const response = await axios.post('/api/product', {
          user: this.getUsersName,
          stand: this.standName
        })

        this.current = []
        this.requested = []

        if (response.data !== 'OK' && response.data !== 'Created') {
          this.current = response.data.current
          this.requested = response.data.requested
        }
      } catch (e) {
        console.log(e.response.data.message)
      }
    }
  },
  computed: {
    getUsersName () {
      return this.$root.$data.user.firstName + ' ' +
              this.$root.$data.user.lastName
    }
  },
  created () {
    this.oldStand = this.standName
    this.getItems()
  },
  watch: {
    standName: function () {
      this.sendItems(this.oldStand)
      this.oldStand = this.standName
      this.getItems()
    }
  },
  beforeDestroy () {
    this.sendItems(this.standName)
  }
})
</script>

<style scoped>
table, th, td {
  border: 1px solid;
}
</style>
