<template>
  <div id="Settings">
      <!-- change name
      password or username or whatever
      logout??
      mostly something for admins to change things -->
      <form>
      </form>

      <div v-if="isAdmin">
        <Assignments />
        <!-- theres gonna be a component here or something -->
        something here
      </div>

  </div>
</template>

<script>
import Assignments from '@/components/Assignments.vue'

export default {
  name: 'Settings',
  components: {
    Assignments
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
