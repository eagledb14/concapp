<template>
  <div id="Request">
    <div class="flex flex-col justify-center items-center">
    <form class="my-5" v-on:submit.prevent="uploadFile()">
      <input type="file" name="standSheet" @change="fileChanged">
      <button  class="my-2 p-2 bg-green-500 rounded" type="submit">Upload</button>
    </form>

      <select class="m-2 px-5" v-model="selectedStand">
          <option v-for="stand in standNames" v-bind:key="stand">{{ stand }}</option>
      </select>

      <div v-for="stand in standList" :key="stand.stand">
        <div v-if="stand.stand == selectedStand">
          <h2> User: {{stand.user}} </h2>
          <h2 class="mb-3"> Date: {{stand.date}} </h2>

          <div class="flex justify-center">
            <button class="my-2 p-2 bg-green-500 rounded" @click="confirmDelete()">Delete</button>
          </div>

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
        this.standList = []
        this.standNames = []
        const response = await axios.get('/api/product/' + this.$root.$data.user.admin)
        this.standList = response.data.products

        for (const stand of this.standList) {
          this.standNames.push(stand.stand)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async confirmDelete () {
      if (confirm(`Do you want to delete: ${this.selectedStand}?`)) {
        this.deleteProduct()
      }
    },
    async deleteProduct () {
      console.log(this.$root.$data.user)
      await axios.put('/api/product/delete/' + this.selectedStand, {
        admin: this.$root.$data.user
      })

      this.getProducts()
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
