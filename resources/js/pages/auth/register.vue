<template>
  <div class="row">
    <div class="col-lg-8 m-auto">
      <card
        :title="title"
      >
        <form
          @submit.prevent="register"
          @keydown="form.onKeydown($event)"
        >
          <!-- Email -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">Email</label>
            <div class="col-md-7">
              <input
                v-model="form.email"
                pattern="\S+@\S+"
                required
                :class="{ 'is-invalid': form.errors.has('email') }"
                class="form-control"
                type="email"
                name="email"
              >
              <has-error
                :form="form"
                field="email"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="form-group row">
            <label class="col-md-3 col-form-label text-md-right">Password</label>
            <div class="col-md-7">
              <input
                v-model="form.password"
                :class="{ 'is-invalid': form.errors.has('password') }"
                class="form-control"
                required
                type="password"
                name="password"
              >
              <has-error
                :form="form"
                field="password"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-md-7 offset-md-3 d-flex">
              <!-- Submit Button -->
              <v-button :loading="form.busy">
                Register
              </v-button>
            </div>
          </div>
        </form>
      </card>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {

  data: () => ({
    title: 'Register user',
    form: new Form({
      email: 'asasda@sdsfdgtrs.casdac',
      password: '1234543645dc'
    })
  }),

  methods: {
    async register () {
      try {
        const { data } = await this.form.post('/api/register')
        Event.$emit('register-user', data)
        // Redirect home.
        this.$router.push({ name: 'home' })
      } catch (e) {
        Event.$emit('register-user', 0)
      }
    }

  }
}
</script>
