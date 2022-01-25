<template>
  <div class="home">

    <h1 v-if="user">User {{ userFirstName }} has logged on</h1>
    <h1 v-else>User not logged in</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    user () {
      return this.$root.$data.user
    },
    userFirstName () {
      return this.$root.$data.user.firstName
    }
  }
}
</script>
