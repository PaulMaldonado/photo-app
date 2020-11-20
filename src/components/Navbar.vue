<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-navbar-color p-4">
          <router-link to="/home" class="navbar-brand">Photos app</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav">
                  <template v-if="user.loggedIn">
                      <li class="nav-item active">
                          <router-link to="/profile" class="nav-link">Perfil: {{ user.data.displayName }}</router-link>
                      </li>

                      <li class="nav-item active">
                          <router-link to="/create" class="nav-link">Crear nuevo album</router-link>
                      </li>

                      <li class="nav-item active">
                        <router-link to="/photos" class="nav-link">Album de fotos</router-link>
                      </li>

                      <li class="nav-item active">
                        <a href="" class="nav-link" @click.prevent="signOut">Cerrar sesión</a>
                      </li>
                  </template>

                  <template v-else>
                    <li class="nav-item active">
                        <router-link to="/register" class="nav-link">Registrate</router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link to="/session" class="nav-link">Iniciar sesión</router-link>
                    </li>
                  </template>
              </ul>
          </div>
      </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'

export default {
    methods: {
        signOut() {
            firebase.auth().signOut()
                .then( () => {
                    this.$router.replace({
                        name: '/'
                    })
                })
        }
    },

    computed: {
        ...mapGetters({
            user: 'user'
        })
    }
}
</script>

<style scoped>
    .bg-navbar-color {
        background-color: #023856;
    }
</style>>