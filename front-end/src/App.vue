<template>
  <div id="app">

    <div class="p-6 bg-green-500 rounded-b-lg flex justify-evenly">
      <router-link to="/" class="rounded hover:bg-white text-xl p-2"> Home </router-link>
      <router-link to="/dashboard" class="rounded hover:bg-white text-xl p-2" > Login </router-link>
    </div>

    <div class="flex justify-around">
      <router-view/>
    </div>

  </div>
</template>
<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
