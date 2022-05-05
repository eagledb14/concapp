<template>
    <div id="Stand">
      <div class="flex flex-col justify-center items-center" v-if="standsList && standsList.length > 0">
        <h1 class="m-2 font-bold">Stand: {{selectedStand}}</h1>
        <select class="m-2 px-5" v-model="selectedStand">
          <option v-for="stand in standsList" v-bind:key="stand">{{ stand }}</option>
        </select>
        <Stock class="flex justify-center" :standName="selectedStand" :products="productList" :units="unitList" />
      </div>
      <div v-else>
        <h1> You have not been assigned any stands</h1>
      </div>
    </div>
</template>

<script>
import Stock from '@/components/Stock.vue'
import axios from 'axios'

export default ({
  name: 'Stand',
  components: {
    Stock
  },
  props: {
    standsList: Array
  },
  data () {
    return {
      selectedStand: '',
      productList: [],
      unitList: []
    }
  },
  methods: {
    async getStandInfo () {
      try {
        const response = await axios.post('api/product/info', {
          list: this.selectedStand
        })

        this.productList = response.data.items
        this.unitList = response.data.units
      } catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    selectedStand: function () {
      if (this.standsList.length > 0) {
        this.getStandInfo()
      }
    }
  },
  created () {
    this.getStandInfo()
    if (this.standsList) {
      this.selectedStand = this.standsList[0]
    }
  }
})
</script>
