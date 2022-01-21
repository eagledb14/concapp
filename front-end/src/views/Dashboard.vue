<template>
    <div id="Dashboard" >
      <h1 v-if="user"> Temporary holding text</h1>
      <component :is="selectedComponent" @change-component="switchComponent" v-else></component>
    </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Dashboard',
  components: {
    Login,
    Register
  },
  data () {
    return {
      selectedComponent: 'Login'
    }
  },
  methods: {
    switchComponent (component) {
      this.selectedComponent = component
    }
  },
  computed: {
    user () {
      return this.$root.$data.user
    },
    whichView () {
      return this.view
    }
  },
  created () {
    this.view = 'Login'
  }
}
</script>
