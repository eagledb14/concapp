<template>
    <div id="AccountSettings">
        <div class="flex justify-around bg-green-500 sm:mx-4 md:mx-10 xl:mx-72 rounded-lg">
          <div>
            <form class="mt-12 p-16">
              <fieldset>
                <legend class="align-center text-lg" >Change Username</legend>
                <input placeholder="new username" v-model="newUser" class="m-1 p-1 mr-2 rounded">
              </fieldset>
              <fieldset>
                <button type="submit" @click="changeUser" class="mt-3 p-2 hover:bg-white rounded">Submit</button>
              </fieldset>
            </form>

            <form class="px-16 pb-16">
              <legend class="align-center text-lg" >Change Password</legend>

              <div class="flex justify-around">
                <input placeholder="new password" v-model="newPass" type="password" class="m-1 p-1 mr-2 rounded">
                <input placeholder="retype new password" v-model="checkPass" type="password" class="m-1 p-1 mr-2 rounded">
              </div>

              <fieldset>
                <button type="submit" @click="changePassword" class="mt-3 p-2 hover:bg-white rounded">Submit</button>
              </fieldset>
            </form>

            <button type="submit" @click="deleteAccount" class="align-center text-lg mx-16 mb-16 p-2 bg-red-500 rounded-lg">Delete Account</button>

          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AccountSettings',
  data () {
    return {
      newUser: '',
      checkPass: '',
      newPass: ''
    }
  },
  methods: {
    changeUser () {
      if (confirm('Are you sure you want to change your username?')) {
        try {
          axios.post('/api/users/username/' + this.$root.$data.user._id, {
            newUser: this.newUser
          })
        } catch (e) {
          console.log(e)
        }
      }
    },
    changePassword () {
      if (this.oldPass === this.newPass && confirm('Are you sure you want to change you password?')) {
        try {

        } catch (e) {
          console.log(e)
        }
      }
    },
    deleteAccount () {
      try {
        axios.delete('/api/users/delete/' + this.$root.$data.user._id)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
