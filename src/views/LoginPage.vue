<template>
  <div className="login-page container mt-4">
    <div className="row">
      <div className="col-md-6 mb-4">
        <login-form @login-success="handleLoginSuccess"/>
      </div>
      <div className="col-md-6">
        <registration-form @register-success="handleRegisterSuccess"/>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import RegistrationForm from '@/components/RegistrationForm.vue';
import {useRouter} from 'vue-router';

export default {
  components: {
    LoginForm,
    RegistrationForm
  },
  setup() {
    const router = useRouter();

    const handleLoginSuccess = () => {
      router.push('/profile');
    };

    const handleRegisterSuccess = () => {
      router.push('/map');
    };

    return {handleLoginSuccess, handleRegisterSuccess};
  }
};
</script>

<style scoped>
.login-page {
}
</style>
