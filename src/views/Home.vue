<template>
  <div class="home">
    <Navbar @limpiarCadena="limpiarCadena" @buscarCadena="buscarCadena" />

    <div class="row mt-5">
      <div class="col-2">
        <div class="d-none d-sm-none d-md-none d-xl-block d-lg-block ">
          <Lateralbar @cambioFiltro="cambioFiltro"/>
        </div>  
      </div>
      <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mt-5">
        <Filtertop @OrdenarPrecio="OrdenarPrecio" @filtroRango="filtroRango" @OrdenarTitulo="OrdenarTitulo" @cambioFiltro="cambioFiltro"/>
        <Anuncios ref="anuncios1"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Lateralbar from '../components/Lateralbar.vue'
import Filtertop from "../components/Filtertop.vue"
import Anuncios from "../components/Anuncios.vue"

export default {
  name: 'Home',
  components: {
    Navbar,
    Lateralbar,
    Anuncios,
    Filtertop,
  },
  methods : {
    limpiarCadena(){
      this.$refs.anuncios1.limpiar()
    },
    buscarCadena(cad){
      this.$refs.anuncios1.buscarTexto(cad)
    },
    cambioFiltro(fil){
      this.$refs.anuncios1.filtrar(fil)
    },
    OrdenarPrecio(Ascendente){
      this.$refs.anuncios1.OrdenarPrecio(Ascendente)
    },
    filtroRango(inicial, final){
      this.$refs.anuncios1.filtroRango(inicial, final)
    },
    OrdenarTitulo(titulo){
      this.$refs.anuncios1.OrdenarTitulo(titulo)
    }
  }
}
</script>
