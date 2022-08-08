<template>
  <div>
    <h1> Home Page </h1>
    <button @click="logout()">
      logout
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  methods: {
    ...mapActions({
      clearAuth: 'auth/clearAuth'
    }),
    logout () {
      this.clearAuth()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
