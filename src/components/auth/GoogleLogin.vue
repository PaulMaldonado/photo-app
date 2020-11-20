<template>
  <div>
      <button class="btn btn-outline-danger btn-block" @click="$emit('social-submit')">
          Iniciar sesión con Google
      </button>
  </div>
</template>

<script>
export default {
    name: 'GoogleLogin'
}
</script>

<style>

</style>