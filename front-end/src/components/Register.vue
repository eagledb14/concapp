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
      <fieldset>
        <button class="mt-3 p-2 hover:bg-white rounded">Submit</button>
      </fieldset>
    </form>

    <div>
      Already have an account? Login <button class="text-blue-600" @click="switchComponent">here</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    }
  },
  methods: {
    switchComponent () {
      this.$emit('change-component', 'Login')
    }
  }
}
</script>
