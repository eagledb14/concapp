<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1 v-if="user">User {{ userFirstName }} has logged on</h1>
    <h1 v-else>User not logged in</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
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
