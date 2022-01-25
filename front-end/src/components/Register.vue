<template>
  <div class="Register">
    <form class="mt-12 p-16 bg-green-500 rounded-lg ">
      <fieldset>
        <legend class="align-center text-lg">Register</legend>
        <input placeholder="first name" v-model="firstName" class="p-1 mr-2 rounded">
        <input placeholder="last name" v-model="lastName" class="p-1 rounded">
      </fieldset>
      <fieldset class="pt-2">
        <input placeholder="username" v-model="username" class="p-1 mr-2 rounded">
        <input placeholder="password" type="password" v-model="password" class="p-1 rounded">
      </fieldset>
      <fieldset class="pt-2 text-red-500 break-words">
      <p>{{ error }} </p>
      </fieldset>
      <fieldset>
        <button @click="register()" class="mt-3 p-2 hover:bg-white rounded">Submit</button>
      </fieldset>
    </form>

    <div>
      Already have an account? Login <button class="text-blue-600" @click="switchComponent">here</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    switchComponent () {
      this.$emit('change-component', 'Login')
    },
    async register () {
      this.error = ''

      if (!this.username) {
        this.error = 'missing username'
      } else if (!this.password) {
        this.error = 'missing password'
      } else if (!this.firstName) {
        this.error = 'missing first name'
      } else if (!this.lastName) {
        this.error = 'missing last name'
      }

      if (this.error !== '') {
        return
      }

      try {
        const response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password
        })

        this.$root.$data.user = response.data.user
      } catch (e) {
        this.error = e.response.data.message
        this.$root.$data.user = null
        console.log(e)
      }
    }
  },
  created () {
    this.error = ''
  }
}
</script>
