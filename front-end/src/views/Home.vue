<template>
  <div id="home">

    <div>
      <h1 v-if="user">
        User {{ userFirstName }} is logged in
        <Stand :standsList="getStandsList"/>
        </h1>
      <h1 v-else>User not logged in</h1>
      </div>
  </div>
</template>

<script>
import Stand from '@/components/Stand.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Stand
  },
  methods: {
    async updateUserStands () {
      if (!this.$root.$data.user) {
        return
      }
      try {
        const response = await axios.get('/api/users/stand/' + this.$root.$data.user._id)
        this.$root.$data.user.standsList = response.data.standsList
      } catch (e) {
        console.log(e.response.data.message)
      }
    }
  },
  computed: {
    user () {
      return this.$root.$data.user
    },
    userFirstName () {
      return this.$root.$data.user.firstName
    },
    getStandsList () {
      return this.$root.$data.user.standsList
      // return ['a', 'b', 'c']
    }
  },
  created () {
    this.updateUserStands()
  }
}
</script>
