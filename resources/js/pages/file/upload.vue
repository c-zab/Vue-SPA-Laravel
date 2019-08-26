<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card
        :title="title"
      >
        <form @submit.prevent="upload">
          <!-- File -->
          <div class="form-group row">
            <label
              class="col-md-3 col-form-label text-md-right"
              for="exampleFormControlFile1"
            >File</label>
            <div class="col-md-7">
              <div class="form-group">
                <input
                  id="exampleFormControlFile1"
                  type="file"
                  class="form-control-file"
                  @click="isReady = true"
                  @change="onFileChange"
                >
              </div>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <button
                :disabled="(file == '')"
                class="btn btn-success"
              >
                <span
                  v-if="isReady"
                  class="spinner-border spinner-border-sm"
                />
                {{ buttonLabel }}
              </button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Create',
  props: {
    userId: {
      type: Number,
      default: 0,
      required: true
    }
  },
  data: () => ({
    title: 'Add File',
    file: '',
    isReady: false
  }),
  computed: {
    buttonLabel: {
      get: function () {
        return 'Submit'
      },
      set: (newValue) => {
        this.isReady = false
      }
    }

  },

  methods: {
    async upload () {
      try {
        await axios.post('/api/upload')

        this.$router.push({ name: 'files' })
      } catch (e) {}
    },

    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.file = e.target.result
      }
      reader.readAsDataURL(file)
      this.isReady = false
    }
  }
}
</script>
