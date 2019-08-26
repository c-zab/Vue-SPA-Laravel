<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <div class="d-flex">
        <div class="mr-auto">
          <h1>All files</h1>
        </div>
        <div class="align-self-center">
          <router-link
            :to="{ name: 'file.upload' }"
            class="btn btn-success"
          >
            Add File
          </router-link>
        </div>
      </div>
      <file
        v-for="(file, index) in files"
        :key="index"
        :title="file.name"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Files',
  props: {
    userId: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data: () => ({
    files: []
  }),
  created () {
    axios.get('/api/files', {
      params: {
        id: this.userId
      }
    })
      .then(response => {
        this.files = response.data
      }).catch(e => {}
      )
  }
}
</script>
