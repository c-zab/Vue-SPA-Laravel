<template>
  <div class="text-center">
    <div class="mb-4">
      <h1>
        Welcome
      </h1>
    </div>

    <div class="links">
      <a :href="github">github.com/c-zab</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({ github: 'https://github.com/c-zab' })

}
</script>
