<template>
  <div id="Settings">
      <!-- change name
      password or username or whatever
      logout??
      mostly something for admins to change things -->
      <form>
      </form>

      <div v-if="isAdmin">
        <Stands />
        <!-- theres gonna be a component here or something -->
        something here
      </div>

  </div>
</template>

<script>
import Stands from '@/components/Stands.vue'

export default {
  name: 'Settings',
  components: {
    Stands
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
