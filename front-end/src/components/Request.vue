<template>
  <div id="Request">
    <div class="flex flex-col justify-center items-center">
      <select class="m-2 px-5" v-model="selectedStand">
          <option v-for="stand in standNames" v-bind:key="stand">{{ stand }}</option>
      </select>

      <div v-for="stand in standList" :key="stand.stand">
        <div v-if="stand.stand == selectedStand">
          <h2> User: {{stand.user}} </h2>
          <h2 class="mb-3"> Date: {{stand.date}} </h2>

          <table class="table-auto border-collapse">
            <tr class="m-5">
              <th class="m-5">Product</th>
              <th>Unit</th>
              <th>Current Stock</th>
              <th>Amount Requested</th>
            </tr>

            <tr v-for="unit in stand.productName" :key="unit">
              <td class="text-center">{{ unit }}</td>
              <td class="text-center">{{ stand.units[stand.productName.indexOf(unit)] }}</td>
              <td class="text-center">{{ stand.current[stand.productName.indexOf(unit)] }}</td>
              <td class="text-center">{{ stand.requested[stand.productName.indexOf(unit)] }}</td>
            </tr>

          </table>
        </div>
      </div>

    <form v-on:submit.prevent="uploadFile()">
      <input type="file" name="standSheet" @change="fileChanged">
      <button type="submit">Upload</button>
    </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default ({
  name: 'Admin',
  components: {
  },
  data () {
    return {
      selectedStand: '',
      standNames: [],
      standList: [],
      file: null
    }
  },
  methods: {
    fileChanged () {
      this.file = event.target.files[0]
    },
    async uploadFile () {
      try {
        const formData = new FormData()
        formData.append('standSheet', this.file, this.file.name)

        const r1 = await axios.post('/api/create/file', formData)

        await axios.post('/api/create', {
          path: r1.data.path
        })
        // console.log(r2)
      } catch (e) {
        console.log(e)
      }
    },
    async getProducts () {
      try {
        const response = await axios.get('/api/product/' + this.$root.$data.user.admin)
        // console.log(response.data.products)
        this.standList = response.data.products

        for (const stand of this.standList) {
          this.standNames.push(stand.stand)
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {
    this.standNames = []
    this.standList = []
    this.getProducts()
    this.selectedStand = this.standNames[0]
  }
})
</script>

<style scoped>
table, th, td {
  border: 1px solid;
}
</style>
