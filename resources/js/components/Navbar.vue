<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-success">
    <div class="container">
      <template v-if="userId == 0">
        <router-link
          to="/"
          class="navbar-brand"
        >
          File Management
        </router-link>
      </template>
      <template v-else>
        <router-link
          to="/home"
          class="navbar-brand"
        >
          File Management
        </router-link>
      </template>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        id="navbarToggler"
        class="collapse navbar-collapse"
      >
        <template v-if="userId == 0">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                :to="{ name: 'login'}"
                class="nav-link"
                active-class="active"
              >
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'register'}"
                class="nav-link"
                active-class="active"
              >
                Register
              </router-link>
            </li>
          </ul>
        </template>
        <template v-else>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link
                :to="{ name: 'files'}"
                class="nav-link"
                active-class="active"
              >
                Files
              </router-link>
            </li>
            <li
              class="nav-item"
              @click="logout"
            >
              <router-link
                :to="{ name: 'welcome'}"
                class="nav-link"
                active-class="active"
              >
                Logout
              </router-link>
            </li>
          </ul>
          <template />
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    userId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    logout () {
      Event.$emit('register-user', 0)
    }
  }
}
</script>
