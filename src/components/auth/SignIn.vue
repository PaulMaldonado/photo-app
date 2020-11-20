<template>
  <div>
      <div class="container">
          <h1 class="text-center mt-4 title">Photos app</h1>
          <div class="row mt-4">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <div class="card">
                      <h2 class="text-center py-2 form-title">Iniciar sesión</h2>
                      <div class="card-body">
                          <form @submit.prevent="signIn">
                              <div class="form-group mt-4">
                                  <input type="email"
                                  placeholder="Correo electronico"
                                  class="form-control"
                                  v-model="email"
                                  >

                                  <div class="form-group mt-4">
                                      <input type="password"
                                      placeholder="Contraseña"
                                      class="form-control"
                                      v-model="password"
                                      >
                                  </div>

                                  <button class="btn btn-outline-primary btn-block mt-4">Iniciar sesión</button>

                                  <h5 class="card-title text-center mt-4">Si aún no tienes una cuenta</h5>
                                  <a class="btn btn-link btn-block" @click="$router.push('register')">
                                      Crea una cuenta
                                  </a>

                                  <GoogleLogin 
                                    @social-submit="googleLoginIn"
                                  />
                              </div>
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
    name: 'SignIn',
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
        signIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then( () => {
                    if(this.email !== this.email || this.password !== this.password) {
                        console.log('Revise el correo electronico o la contraseña');

                        return
                    }

                    this.$router.push('profile')
                })
                .catch(error => {
                    console.error(error.message)
                })
        },
        
        googleLoginIn() {
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
</style>