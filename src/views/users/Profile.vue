<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                  <div class="card mt-4">
                      <img :src="user.data.photoURL" :alt="user.data.photoURL" class="card-img-top image-rotate">
                      <div class="card-header">Nombre: {{ user.data.displayName }}</div>
                      <div class="card-body">
                          <p class="card-text">Correo: {{ user.data.email }}</p>
                          <div v-if="user">
                              Bienvenido a tú perfil, te has conectado exitosamente.
                          </div>

                          <div v-else>
                              <p class="card-text">No hay ningun usuario conectado.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

export default {
     data() {
        return {
            movies: []
        }
    },

    methods: {
        logOut() {
            firebase.auth().signOut()
                .then( () => {
                    this.$router.replace('/')
                })
                .catch(error => {
                    console.error(error)
                })
        },

    },

    computed: {
        ...mapGetters({
            user: 'user'
        })
    }
}
</script>

<style scope>
    .image-rotate {
        border-radius: 50%;
    }
</style>