<template>
  <card :title="title">
    You are logged in!
  </card>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return { title: 'Home' }
  }
}
</script>
