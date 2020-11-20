<template>
  <div>
      <div class="container">
          <div class="row mt-4">
              <div class="col-md-6 col-sm-12 col-lg-6 col-xl-6 mx-auto">
                  <div class="card">
                      <div class="card-header">Crear nuevo album</div>
                      <div class="card-body">
                          <form @submit.prevent="submitAlbum">
                              <div class="form-group mt-3">
                                  <input type="text"
                                  placeholder="Url de imagen" 
                                  class="form-control"
                                  v-model="image"
                                  >

                                  <div class="form-group mt-3">
                                      <input type="text"
                                      placeholder="Título del album"
                                      class="form-control"
                                      v-model="title"
                                      >

                                      <div class="form-group mt-3">
                                        <input type="number"
                                        placeholder="Id del album"
                                        class="form-control"
                                        v-model="id"
                                        >
                                      </div>

                                      <button class="btn btn-outline-primary btn-block mt-2">
                                          Guardar
                                      </button>
                                  </div>
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
import axios from 'axios'

export default {
    name: 'NewAlbum',

    data() {
        return {
            title: '',
            image: '',
            id: ''
        }
    },

    methods: {
        submitAlbum() {
            axios.post('https://jsonplaceholder.typicode.com/photos', {
                title: this.title,
                image: this.image,
                id: this.id
            })
            .then( () => {
                if(this.title === null || this.image === null || this.id === null) return

                this.$router.push('photos')
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
}
</script>

<style>

</style>