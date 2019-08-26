<template>
  <div id="app">
    <navbar
      :user-id="userId"
    />

    <div class="container mt-4">
      <slot>
        <router-view :user-id="userId" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ userId: 0 }),
  created () {
    Event.$on('register-user', (data) => {
      this.userId = data
    })
    Event.$on('login-user', (data) => {
      this.userId = data
    })
  }
}
</script>
