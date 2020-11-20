<template>
  <div>
      <div class="hero-image">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 text-lg-left text-center ml-auto mr-auto">
                      <h1 class="banner-title mt-4">Bienvenidos</h1>
                      <br><br>
                      <p class="banner-description">
                          Millones de películas, programas de televisión y personas por descubrir.
                          Explora ahora.
                      </p>
                  </div>

                  <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 d-lg-block d-none">
                      <img src="../assets/img/movies-banner-two.svg" alt="Banner" class="img-responsive card-img-top imag-banner mt-4">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
    .hero-image {
        background-image: url('../assets/img/banner-movie.jpg');
        max-width: 100%;
        height: 90vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .img-banner {
        width: 100%;
        height: 70vh;
    }

    .banner-title {
        color: #FFFFFF;
        font-size: 2.5em;
        font-weight: bold;
    }

    .banner-description {
        color:#FFFFFF;
        font-size: 1.5em;
        font-weight: bold;
    }

    .banner-description-two {
        color: #FFFFFF;
        font-size: 1.5em;
        font-weight: bold;
    }
</style>>