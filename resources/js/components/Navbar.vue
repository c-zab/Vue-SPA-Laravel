<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-success">
    <div class="container">
      <router-link
        to="/"
        class="navbar-brand"
      >
        File Management
      </router-link>

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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'

}
</script>
