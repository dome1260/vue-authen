<template>
  <div class="login">
    <div class="login__card">
      <form>
        <div style="margin-bottom: 12px;">
          <label for="username"> username: </label>
          <input v-model="form.username" id="username" type="text" required>
        </div>
        <div style="margin-bottom: 12px;">
          <label for="password"> password: </label>
          <input v-model="form.password" id="password" type="password" autocomplete="off" required>
        </div>
        <div>
          <button type="button" @click="login()">
            login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      setAuth: 'auth/setAuth'
    }),
    clearForm () {
      this.form = {
        username: '',
        password: ''
      }
    },
    async login () {
      try {
        // username: dome1260 , password:1234
        const { data } = await axios.post('https://test-mongodb-service2.herokuapp.com/auth/login', {
          username: this.form.username,
          password: this.form.password
        })

        if (data.data) {
          alert('login success')
          this.setAuth(data.data)
          this.clearForm()
          this.$router.push({ name: 'Home' })
        }
      } catch (error) {
        alert(error?.response?.data?.message)
        this.clearForm()
      }
    }
  }
}
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login__card {
    padding: 16px;
    border: 1px solid black;
    border-radius: 12px;
  }
</style>
