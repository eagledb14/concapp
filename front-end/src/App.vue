<template>
  <div id="app">

    <div class="pt-6 pb-6 bg-green-500 rounded-b-lg flex justify-evenly">
      <router-link to="/" class="rounded hover:bg-white text-xl p-2"> Home </router-link>
      <router-link v-if="user" to="/Settings" class="rounded hover:bg-white text-xl p-2" > Settings </router-link>
      <router-link v-else to="/Dashboard" class="rounded hover:bg-white text-xl p-2" > Login </router-link>
    </div>

    <div class="flex justify-around">
      <router-view/>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    user () {
      return this.$root.$data.user
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* #app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

#nav a.router-link-exact-active {
  background-color: white;
}
</style>
