<template>
  <div class="col-6 col-xs-6 col-lg-3 col-sm-4">
      <router-link to="/Articleselected" class="container" style="text-decoration: none; color: black;" href="article.html">
        <div class="card">
          <img
            src="https://images.samsung.com/is/image/samsung/pe-galaxy-j6-j600-sm-j600gzkmpet-frontblack-135289039?$720_576_PNG$"
            class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bolder text-center">${{anuncio.Precio}}</h5>
            <p class="card-text lh-1"> {{anuncio.Marca}} {{anuncio.Modelo}}, Pantalla de {{anuncio.Pantalla}}, {{anuncio.ROM}}
            </p>
          </div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  props : ["anuncio"]
}
</script>

<style>

</style>