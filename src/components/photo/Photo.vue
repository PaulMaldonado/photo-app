<template>
  <div>
      <div class="card mt-4">
        <img :src="thumbnailUrl" :alt="thumbnailUrl" class="card-img-top">
        <div class="card-header">{{ albumId }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>

          <button class="btn btn-outline-danger" @click="$emit('delete')">
            Eliminar
          </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Photo',
    props: ['title', 'albumId', 'thumbnailUrl']
}
</script>

<style>

</style>