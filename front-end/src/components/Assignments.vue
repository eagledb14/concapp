<template>
  <div id="Assignments" >
    <div class="flex justify-around bg-green-500 sm:mx-4 md:mx-10 xl:mx-72 rounded-lg">
      <div>
        <div v-for="user in userList" :key="user.username">
          <p>{{user.firstName}} {{user.lastName}}
            <toggle-button class="mx-4 my-2" @change="updateAdmin(user)" :value="user.admin" color="#15803d" :labels="{checked: 'Admin', unchecked: 'User'}" :width="70" :height="30" />
          </p>
            <draggable class="p-10 border-2 border-green-700 bg-green-100 m-1" :sort="false" :list="user.standsList" group="all-stands">
              <div class="m-1" v-for="stand in user.standsList" :key="stand">
              {{stand}}
              </div>
            </draggable>
        </div>
      </div>
        <draggable class="p-10 border-2 border-green-700 bg-green-100 m-1" :sort="false" :list="standsList" group="all-stands" >
          <div class="m-1" v-for="stand in standsList" :key="stand">
            {{stand}}
          </div>
        </draggable>
    </div>
    <div class="flex justify-center">
      <button class="mt-2 p-2 bg-green-500 rounded" @click="updateUserStands(); updateControlStands()">Update</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Draggable from 'vuedraggable'
import { ToggleButton } from 'vue-js-toggle-button'

export default ({
  name: 'Assignments',
  components: {
    Draggable,
    ToggleButton
  },
  data () {
    return {
      userList: [],
      standsList: []
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
    async getStandsList () {
      try {
        const response = await axios.get('/api/users/stand')
        this.standsList = response.data.stands
      } catch (e) {
        console.log(e.response.data.message)
      }
    },
    async updateUserStands () {
      try {
        await axios.post('/api/users/stand', {
          userList: this.userList
        })
      } catch (e) {
        console.log(e.response.data.message)
      }
    },
    async updateControlStands () {
      try {
        await axios.post('/api/users/stand/control', {
          standsList: this.standsList
        })
      } catch (e) {
        console.log(e.response.data.message)
      }
    },
    sortUserStands (user) {
      user.standsList.sort()
    },
    sortStands () {
      this.standsList.sort()
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
    this.getStandsList()
  }
})
</script>
