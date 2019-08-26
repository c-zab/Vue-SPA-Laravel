<template>
  <div class="card my-3">
    <div class="card-header">
      <h5>{{ title }}</h5>
    </div>

    <div class="d-flex align-items-center card-footer text-muted">
      <router-link
        :to="{ name: 'file.update' }"
        class="btn btn-info btn-sm mx-2"
      >
        Edit
      </router-link>
      <router-link
        :to="{ name: 'file.delete' }"
        class="btn btn-danger btn-sm"
      >
        Delete
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'File',

  props: {
    title: { type: String, default: null }
  }
}
</script>
