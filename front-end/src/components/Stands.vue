<template>
  <div id="Stands" class="flex justify-around bg-green-500 sm:mx-4 md:mx-10 xl:mx-72 rounded-lg">
    <div>
      <div v-for="user in userList" :key="user.firstName">
        <p>{{user.firstName}} {{user.lastName}}</p>
      </div>
    </div>
    <div>
      <div v-for="stand in standList" :key="stand">
        {{stand}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default ({
  name: 'Stands',
  data () {
    return {
      userList: [],
      standList: []
    }
  },
  methods: {
    async getUsers () {
      try {
        const response = await axios.get('/api/users/all/' + this.$root.$data.user._id)
        this.userList = response.data.users
      } catch (e) {
        console.log(e.response.data.message)
      }
    }
  },
  created () {
    this.getUsers()
  }
})
</script>
