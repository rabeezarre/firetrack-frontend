<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login" novalidate>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="credentials.email" required :class="{ 'is-invalid': emailError || loginError }">
        <div v-if="emailError" class="invalid-feedback">{{ emailError }}</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="credentials.password" required :class="{ 'is-invalid': passwordError || loginError }">
        <div v-if="passwordError" class="invalid-feedback">{{ passwordError }}</div>
      </div>
      <div v-if="loginError" class="alert alert-danger">{{ loginError }}</div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      emailError: '',
      passwordError: '',
      loginError: ''
    };
  },
  methods: {
    validateEmail() {
      const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.credentials.email);
    },
    async login() {
      // Reset login error
      this.loginError = '';
      this.emailError = this.validateEmail() ? '' : 'Invalid email format';

      if (this.emailError) {
        return;
      }

      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/users/login`, this.credentials);
        this.$store.dispatch('loginUser', response.data);
        this.$emit('login-success');
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.loginError = 'Invalid email or password.';
        } else {
          this.loginError = 'An error occurred during login.';
        }
      }
    }
  }
};
</script>

<style scoped>
.login-form {
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  color: #dc3545;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>
