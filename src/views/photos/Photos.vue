<template>
  <div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4" 
            v-for="photo in allPhotos" 
            :key="photo.id">

            <Photo 
              :thumbnailUrl="photo.thumbnailUrl"
              :albumId="photo.albumId"
              :title="photo.title"
              @delete="deletePhoto(photo.id)"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import Photo from '@/components/photo/Photo'

export default {
  name: 'Photos',
  components: {
    Photo
  },

  data() {
    return {
      allPhotos: []
    }
  },

  created() {
    this.getPhotos()
  },

  methods: {
    getPhotos() {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
          this.allPhotos = response.data
        })
        .catch(error => {
          console.error(error)
        })
    },

    deletePhoto(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then( () => {
          this.allPhotos.splice(id, 1)
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