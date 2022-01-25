<template>
  <div class="Login">
    <form class="mt-12 p-16 bg-green-500 rounded-lg">
      <fieldset>
        <legend class="align-center text-lg" >Login</legend>
        <input placeholder="username" v-model="username" class="p-1 mr-2 rounded">
        <input placeholder="password" type="password" v-model="password" class="p-1 rounded">
      </fieldset>
      <fieldset class="pt-2 text-red-500 break-words">
      <p>{{ error }} </p>
      </fieldset>
      <fieldset>
        <button type="submit" @click="login" class="mt-3 p-2 hover:bg-white rounded">Submit</button>
      </fieldset>
    </form>

    <div>
      Not already registered? Sign up <button class="text-blue-600" @click="switchComponent">here</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    switchComponent () {
      this.$emit('change-component', 'Register')
    },
    async test () {
      try {
        const response = await axios.get('/api/')
        console.log(response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async login () {
      this.error = ''
      if (!this.username) {
        this.error = 'missing username'
      } else if (!this.password) {
        this.error = 'missing password'
      }
      if (this.error !== '') {
        return
      }

      try {
        const response = await axios.post('/api/users/login', {
          username: this.username,
          password: this.password
        })

        this.$root.$data.user = response.data.user
      } catch (e) {
        this.$root.$data.user = null
        this.error = e.response.data.message
        console.log(e)
      }
    }
  }
}
</script>
