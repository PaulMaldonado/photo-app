<template>
  <div>
      <div class="container">
          <h1 class="text-center title mt-4">Photos app</h1>
          <div class="row mt-4">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <div class="card">
                      <h2 class="text-center py-2 form-title">Crear cuenta</h2>
                      <div class="card-body">
                          <form @submit.prevent="signUp">
                              <div class="form-group mt-4">
                                  <input type="email" 
                                  placeholder="Correo electronico"
                                  class="form-control"
                                  v-model="email"
                                  >
                              </div>

                              <div class="form-group mt-4">
                                  <input type="password"
                                  placeholder="Contraseña"
                                  class="form-control"
                                  v-model="password"
                                  >
                              </div>

                              <button class="btn btn-outline-primary btn-block mt-4">Registrate</button>

                              <h5 class="card-title mt-4 text-center">Sí ya tienes una cuenta</h5>
                              <a class="btn btn-link btn-block" role="button" @click="$router.push('session')">
                                Iniciar sesión
                              </a>

                              <GoogleLogin 
                                @social-submit="googleLoginUp"
                              />
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import GoogleLogin from './GoogleLogin'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

export default {
    name: 'SignUp',
    components: {
        GoogleLogin
    },

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        signUp() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then( () => {
                    if(this.email === null || this.password === null) return

                    this.$router.push('profile')
                })
                .catch(error => {
                    console.error(error.message)
                })
        },

        googleLoginUp() {
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider)
                .then( () => {
                    this.$router.push('profile')
                })
                .catch(error => {
                    return error.message;
                })
        }
    }
}
</script>

<style scoped>
    .title {
        color: #032541;
        font-size: 2em;
        font-weight: bold;
    }

    .form-title {
        font-size: 1.5em;
        color: #032541;
    }
</style>>