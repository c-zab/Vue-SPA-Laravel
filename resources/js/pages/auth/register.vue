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
import axios from 'axios'

export default {

  data: () => ({
    title: 'Register user',
    email: 'carlos@carlos.com',
    password: 'carloscarlos',
    form: new Form({
      email: 'carlos@carlos.com',
      password: 'carloscarlos'
    })
  }),

  methods: {
    async register () {
      axios.post('/api/register', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log('TCL: register -> response', response)
        })
        .catch(e => {
          console.log('TCL: register -> e', e)
        })
      // try {
      //   // Register the user.
      //   const { data } = await this.form.post('/api/register')

      //   // Must verify email fist.
      //   if (data.status) {
      //   // Redirect home.
      //   // this.$router.push({ name: 'home' })
      //   } else {
      //     const dataw = await this.form.post('/api/login')
      //     console.log('TCL: register -> token', dataw)
      //   }
      // } catch (e) {
      //   console.log('TCL: register -> e', e)
      // }
    }
  }
}
</script>
