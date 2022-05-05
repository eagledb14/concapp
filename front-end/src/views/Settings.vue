<template>
  <div id="Settings">
      <!-- change name
      password or username or whatever
      logout??
      mostly something for admins to change things -->
      <form>
      </form>
      <div class="bg-gray-300 p-1 ">
        <div class="flex justify-around items-center">
          <button @click="switchComponent('AccountSettings')">Account Settings</button>
          <button v-if="isAdmin" @click="switchComponent('Assignments')">Stand Assignments</button>
          <button v-if="isAdmin" @click="switchComponent('Request')">View Requests</button>
        </div>
      </div>
      <div class="p-4 bg-gray-300 ">
        <component :is="selectedComponent"></component>
      </div>
      <div v-if="isAdmin">
        <!-- <Assignments /> -->
        <!-- theres gonna be a component here or something -->
      </div>

      <div class="mb-10"></div>

  </div>
</template>

<script>
import AccountSettings from '@/components/AccountSettings.vue'
import Assignments from '@/components/Assignments.vue'
import Request from '@/components/Request.vue'

export default {
  name: 'Settings',
  components: {
    AccountSettings,
    Assignments,
    Request
  },
  data () {
    return {
      selectedComponent: 'AccountSettings'
    }
  },
  methods: {
    switchComponent (newComponent) {
      this.selectedComponent = newComponent
    }
  },
  computed: {
    isAdmin () {
      const user = this.$root.$data.user

      if (!user) {
        return false
      } else {
        return this.$root.$data.user.admin
      }
    }
  }
}
</script>
