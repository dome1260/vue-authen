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
    login () {
      if (this.form.username === 'admin' && this.form.password === 'admin') {
        alert('เข้าสู่ระบบสำเร็จ')
        this.setAuth({
          username: this.form.username
        })
        this.$router.push({ name: 'Home' })
      } else {
        alert('username / password ไม่ถูกต้อง')
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
