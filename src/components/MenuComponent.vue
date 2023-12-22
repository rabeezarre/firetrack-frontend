<template>
  <nav class="menu navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand">FireTrack</router-link>

      <!-- Mobile Menu Toggle Button -->
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleMobileMenu"
      >
        <img
            v-if="!isMobileMenuOpen"
            src="@/assets/icons/menu.svg"
            alt="Menu"
            class="menu-icon"
        />
        <img
            v-else
            src="@/assets/icons/close.svg"
            alt="Close"
            class="menu-icon"
        />
      </button>

      <!-- Mobile Menu -->
      <div class="collapse navbar-collapse" :class="{ show: isMobileMenuOpen }" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/map" class="nav-link">Map</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">Profile</router-link>
          </li>
        </ul>
        <div class="d-flex flex-column align-items-center">
          <button class="btn btn-primary" @click="handleButtonClick">
            {{ isAuthenticated ? 'Logout' : 'Login' }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MenuComponent',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  data() {
    return {
      isMobileMenuOpen: false, // Track the mobile menu state
    };
  },
  methods: {
    handleButtonClick() {
      if (this.isAuthenticated) {
        this.$store.dispatch('logoutUser');
      } else {
        this.$router.push('/login');
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen; // Toggle the mobile menu state
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  .navbar {
    background-color: #ff5722;
  }
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .navbar-toggler {
    border: none;
  }
  .navbar-toggler:focus {
    outline: none;
  }
  .nav-link {
    font-size: 1.2rem;
    &.active {
      font-weight: bold;
    }
  }
  .btn-primary {
    font-size: 1.2rem;
    background-color: #007bff;
    border: none;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 767px) {
    .navbar-nav {
      flex-direction: column;
      align-items: center;
    }

    .btn-primary {
      width: 100%;
      max-width: 300px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
