<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" type="dark" variant="dark">
      <b-container>
          <router-link to="/">
        <b-navbar-brand class="d-none d-xl-block d-xxl-block mb-1">
            <label class="mt-1 mr-2 d-none d-xl-block d-xxl-block">
                <b-icon icon="phone-vibrate" style="color: #FFFF;"></b-icon>
                Tienda CellPhone
            </label>
        </b-navbar-brand>
      </router-link>
      
      <b-nav-form class="control-form ml-1">
        <b-icon icon="search" class="iconBuscar mb-1"></b-icon>
        <b-form-input size="md" class="mr-sm-2 rounded-pill input-buscar mb-1" placeholder="Search"></b-form-input>
      </b-nav-form>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link to="/" class="d-block">
              <b-button class="mr-1 ml-1 mb-1 text-center boton inicio">
                <span>
                  Inicio
                </span>
                <b-icon icon="house" class="i icono"></b-icon>
              </b-button>
            </router-link>
            <b-button class="mr-1 ml-1 mb-1 text-center boton estadisticas">
              <span>
                Estadisticas
              </span>
              <b-icon icon="file-bar-graph-fill" class="i icono"></b-icon>
            </b-button>

            <router-link to="/newarticle">
              <b-button class="mr-1 ml-1 mb-1 buttons">
                <b-icon icon="plus-circle-fill" style="color: #f37848;"></b-icon>
              </b-button>
            </router-link>

            <b-button class="mr-1 ml-1 mb-1 buttons">
              <b-icon icon="cart-3" style="color: #f37848;"></b-icon>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                <b-badge href="#" pill variant="dark" style="background-color: #f37848;">+99</b-badge></span>
            </b-button>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.control-form {
  position: relative;
}
.iconBuscar {
  position: absolute;
  left: 10px;
}
.input-buscar {
  text-indent: 22px;
  width: 17rem;
  margin-right: 10px;
}

.buttons{
  background-color: #343a40;
  border: 1px solid #343a40;
}


.boton {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 35px;
  background: #343a40;
	color: #fff;
	/* font-size: 17px;
	font-weight: 500; */
	border: none;
	cursor: pointer;
	transition: .3s ease all;
	border-radius: 5px;
	position: relative;
	overflow: hidden;
}

.boton span {
	position: relative;
	z-index: 2;
	transition: .3s ease all;
}

/* boton inicio */

.boton.inicio{
    width: 90px;

    border: 1px solid #f37848 !important;
}

.boton.inicio span {
	transition: .4s ease-in-out all;
	position: absolute;
	left: 25%;
}

.boton.inicio .icono {
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 2;
	left: -30px;
	transition: .3s ease-in-out all;
	opacity: 0;
}

.boton.inicio.i {
	color: #fff;
	width: 35px;
	height: auto;
}

.boton.inicio:hover {
	background: #f37848;
    color: #fff;
}

.boton.inicio:hover .icono {
	left: calc(100% - 30px);
	opacity: 1;
}

.boton.inicio:hover span {
	left: 15px;
}



/* boton estadisticas */

.boton.estadisticas{
    width: 130px;
    border: 1px solid #f37848 !important;
}

.boton.estadisticas span {
	transition: .4s ease-in-out all;
	position: absolute;
	left: 15%;
}

.boton.estadisticas .icono {
	display: flex;
	align-items: center;
	position: absolute;
	z-index: 2;
	left: -30px;
	transition: .3s ease-in-out all;
	opacity: 0;
}

.boton.estadisticas.i {
	color: #fff;
	width: 35px;
	height: auto;
}

.boton.estadisticas:hover {
	background: #f37848;
    color: #fff;
}

.boton.estadisticas:hover .icono {
	left: calc(100% - 25px);
	opacity: 1;
}

.boton.estadisticas:hover span {
	left: 8px;
}





@media (min-width: 810px) { 
  .input-buscar{
    width: 450px !important;
  }
 }

 @media (min-width: 1920px) { 
  .input-buscar{
    width: 600px !important;
  }
 }

</style>