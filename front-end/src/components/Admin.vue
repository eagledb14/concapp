<template>
  <div id="Admin">
    <div class="flex items-center flex-col bg-green-500 sm:mx-4 md:mx-10 xl:mx-72 rounded-lg">
      <div class="flex justify-center">
        <h1 class="my-2 mx-3">User</h1>
        <h1 class="my-2 mx-3">Admin Access</h1>
      </div>
      <div class="flex my-4" v-for="user in userList" :key="user.username">
        <p class="mx-4" >{{user.firstName}} {{user.lastName}}</p>
        <toggle-button class="mx-4 my-2" @change="updateAdmin(user)" :value="user.admin" color="#15803d" :labels="{checked: 'Yes', unchecked: 'No'}" :width="70" :height="30" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ToggleButton } from 'vue-js-toggle-button'

export default ({
  name: 'Admin',
  components: {
    ToggleButton
  },
  data () {
    return {
      userList: []
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
    },
    async updateAdmin (user) {
      try {
        const adminStatus = !user.admin
        await axios.post('/api/users/admin/' + this.$root.$data.user._id, {
          user: user._id
        })
        user.admin = adminStatus
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
