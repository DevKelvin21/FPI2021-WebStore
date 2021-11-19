<template>
  <div class="col-6 col-xs-6 col-lg-3 col-sm-4">
      <router-link to="/Articleselected" class="container" style="text-decoration: none; color: black;" href="article.html">
        <div class="card" style="box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); border: none;">
          <h4 class="card-title pt-3  text-center">{{anuncio.Marca}} {{anuncio.Modelo}}</h4>
          <p class="card-text lh-1" style="opacity: 0.7;" >{{anuncio.ROM}}</p>
          <img
            src="https://images.samsung.com/is/image/samsung/pe-galaxy-j6-j600-sm-j600gzkmpet-frontblack-135289039?$720_576_PNG$"
            class="card-img-top" alt="...">
          <div class="card-body d-none d-lg-block">
            <div class="d-flex container justify-content-between">
              <h4 class="card-title fw-bolder text-center">${{anuncio.Precio}}</h4>
              <button type="button" class="boton view">
                <i class="bi bi-eye-fill pr-1"></i>
                Ver mas
              </button>
            </div> 
          </div>
          <div class="card-body d-block d-lg-none">
            <h4 class="card-title fw-bolder text-center">${{anuncio.Precio}}</h4>
          </div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props : ["anuncio"]
}
</script>

<style scoped>
.boton {
	display: inline-flex;
	align-items: center;
	justify-content: center;
  background: #ffff;
	color: #343a40;
	cursor: pointer;
	transition: .3s ease all;
	border-radius: 15px;
	position: relative;
	overflow: hidden;
  width: 90px !important;
  border: 1px solid #f37848;
}


.boton.view:hover{
	background-color: #f37848;
  color: #ffff;
}

</style>