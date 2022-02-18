<template>
  <div id="Stock">

    <table class="table-auto border-collapse">
      <tr>
        <th>Product</th>
        <th>Before game</th>
        <th>Transfer in</th>
        <th>Transfer out</th>
        <th>Final Count</th>
      </tr>

      <tr v-for="product in products" :key="product">
        <td>{{product}}</td>
        <td><input class="text-center" type="text" v-model="beforeGameCount[products.indexOf(product)]"></td>
        <td><input class="text-center" type="text" v-model="transferInCount[products.indexOf(product)]"></td>
        <td><input class="text-center" type="text" v-model="transferOutCount[products.indexOf(product)]"></td>
        <td><input class="text-center" type="text" v-model="finalCount[products.indexOf(product)]"></td>
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
    products: Array
  },
  data () {
    return {
      oldStand: '',
      beforeGameCount: [],
      transferInCount: [],
      transferOutCount: [],
      finalCount: []
    }
  },
  methods: {
    async sendItems (standName) {
      try {
        await axios.put('/api/product', {
          user: this.getUsersName,
          stand: standName,
          products: this.products,
          before: this.beforeGameCount,
          in: this.transferInCount,
          out: this.transferOutCount,
          final: this.finalCount
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

        this.beforeGameCount = []
        this.transferInCount = []
        this.transferOutCount = []
        this.finalCount = []

        if (response.data) {
          this.beforeGameCount = response.data.before
          this.transferInCount = response.data.in
          this.transferOutCount = response.data.out
          this.finalCount = response.data.final
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
