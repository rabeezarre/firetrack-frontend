<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="register" novalidate>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="user.email" required :class="{ 'is-invalid': emailError || registrationError }">
        <div v-if="emailError" class="invalid-feedback">{{ emailError }}</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="user.password" required :class="{ 'is-invalid': passwordError }">
        <div v-if="passwordError" class="invalid-feedback">{{ passwordError }}</div>
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" v-model="user.firstName" required>
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" v-model="user.lastName" required>
      </div>
      <div class="mb-3">
        <label for="position" class="form-label">Position</label>
        <select class="form-control" id="position" v-model="user.position" required>
          <option value="" disabled>Select position</option>
          <option value="Ranger">Ranger</option>
          <option value="Technician">Technician</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div v-if="registrationError" class="alert alert-danger">{{ registrationError }}</div>
      <button type="submit" class="btn btn-success">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        position: '',
        role: 'USER'
      },
      emailError: '',
      passwordError: '',
      registrationError: ''
    };
  },
  methods: {
    validateEmail() {
      const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.user.email);
    },
    validatePassword() {
      // Example: Minimum eight characters, at least one letter and one number
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(this.user.password);
    },
    async register() {
      this.emailError = this.validateEmail() ? '' : 'Invalid email format';
      this.passwordError = this.validatePassword() ? '' : 'Password must be at least 8 characters long and include both letters and numbers';

      if (this.emailError || this.passwordError) {
        // If there is a validation error, don't proceed to registration
        return;
      }

      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/users/register`, this.user);
        this.$store.dispatch('loginUser', response.data);
        this.$emit('register-success');
      } catch (error) {
        if (error.response && error.response.status === 409) { // Assuming 409 status code for duplicate email
          this.registrationError = 'This email is already registered.';
        } else {
          this.registrationError = 'An error occurred during registration.';
        }
      }
    }
  }
};
</script>

<style scoped>
/*.registration-form {*/
/*// Custom styles*/
/*}*/

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
