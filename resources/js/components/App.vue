<template>
  <div id="app">
    <navbar />

    <div class="container mt-4">
      <slot>
        <router-view />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
