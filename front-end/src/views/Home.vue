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

export default {
  name: 'Home',
  components: {
    Stand
  },
  computed: {
    user () {
      return this.$root.$data.user
    },
    userFirstName () {
      return this.$root.$data.user.firstName
    },
    getStandsList () {
      // return this.$root.$data.user.standsList
      return ['a', 'b', 'c']
    }
  }
}
</script>
