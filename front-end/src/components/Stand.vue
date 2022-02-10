<template>
    <div id="Stand">

      <div v-if="standsList.length > 0">
        <select v-model="selectedStand">
          <option v-for="stand in standsList" v-bind:key="stand">{{ stand }}</option>
        </select>

        <Stock :products="productList"/>
      </div>
      <div v-else>
        <h1> You have not been assigned any stands</h1>
      </div>
    </div>
</template>

<script>
import Stock from '@/components/Stock.vue'

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
      productList: ['ham', 'cheese', 'onions']
    }
  },
  watch: {
    selectedStand: function () {
      this.productList.push('a')
      // this will grab the stand information from the server
      console.log('stand changed')
    }
  },
  created () {
    if (this.standsList.length > 0) {
      this.selectedStand = this.standsList[0]
    }
  },
  beforeDestroy () {
    console.log('destroyed Stand')
  }
})
</script>
