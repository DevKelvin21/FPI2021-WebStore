<template>
  <div>
    <div class="d-xl-block d-md-none d-sm-none d-lg-block d-none">
      <div class="row mx-4">
        <div class="col-6">
          <div class="border border-bg01 mx-4 filter-top">
            <div class="input-group me-4">
              <span class="mx-1 py-2">Precio :</span>
              <input
                type="number"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                v-model="PrecioInicial"
              />
            </div>
            <div class="input-group">
              <span class="mx-1 py-2">Hasta :</span>
              <input
                type="number"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
                v-model="PrecioFinal"
              />
            </div>
            <div class="btn">
              <button @click="FiltrarRango" type="submit" class="boton fecha mt-1">
                <div class="icono">
                  <i class="bi bi-filter-square"></i>
                </div>
                <span>Filtrar</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="border border-bg01 filter-top">
            Ordenar por :
            <div class="btn">
              <button @click="OrdenarPrecio" type="submit" class="boton precio mt-1">
                <div class="icono">
                  <span v-show="Ascendente"><i class="bi bi-sort-numeric-up"></i></span>
                  <span v-show="!Ascendente"><i class="bi bi-sort-numeric-down-alt"></i></span>
                </div>
                <span>Precio</span>
              </button>
            </div>
            <div class="btn">
              <button @click="Ordenartitulo" type="submit" class="boton fecha mt-1">
                <div class="icono">
                  <span v-show="Tituloasc"><i class="bi bi-sort-alpha-down"></i></span>
                  <span v-show="!Tituloasc"><i class="bi bi-sort-alpha-up-alt"></i></span>
                </div>
                <span>Titulo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-block d-lg-none d-md-block">
        <div class="row">
          <div class="col-6">
          <b-dropdown text="Ordenar por " variant="outline-dark">
            <b-dropdown-item @click="Mayorprecio">Mayor Precio</b-dropdown-item>
            <b-dropdown-item @click="Menorprecio">Menor Precio</b-dropdown-item>
            <b-dropdown-item @click="tituloaz">Titulo <i class="bi bi-sort-alpha-down"></i></b-dropdown-item>
            <b-dropdown-item @click="tituloza">Titulo <i class="bi bi-sort-alpha-up-alt"></i></b-dropdown-item>
          </b-dropdown>
        </div>  
        <div class="col-6">
          <b-dropdown size="lg" dropleft variant="link" toggle-class="text-decoration-none" no-caret>
            <template #button-content><span><i class="bi bi-funnel-fill" style="color: #343a40;"></i></span>
            </template>
            <b-dropdown-item class="px-4 py-3"><Lateralbar/></b-dropdown-item>
          </b-dropdown>
          
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Lateralbar from './Lateralbar.vue'

export default {
  name : "Filtertop",
  components : {
    Lateralbar,
  },
  data() {
    return {
      Ascendente: true,
      PrecioInicial : 0,
      PrecioFinal : 0,
      Tituloasc : true,
    }
  },
  methods: {
    Ordenartitulo(){
      this.Tituloasc=!this.Tituloasc
      this.$emit("OrdenarTitulo",this.Tituloasc)
    },
    tituloaz(){
      this.Tituloasc=true
      this.$emit("OrdenarTitulo",this.Tituloasc)
    },
    tituloza(){
      this.Tituloasc=false
      this.$emit("OrdenarTitulo",this.Tituloasc)
    },
    OrdenarPrecio(){
      this.Ascendente=!this.Ascendente
      this.$emit("OrdenarPrecio",this.Ascendente);
    },
    FiltrarRango(){
      this.$emit("filtroRango",this.PrecioInicial, this.PrecioFinal);
    },
    Mayorprecio(){
      this.Ascendente=false
      this.$emit("OrdenarPrecio",this.Ascendente);
    },
    Menorprecio(){
      this.Ascendente=true
      this.$emit("OrdenarPrecio",this.Ascendente);
    }
  },
};
</script>

<style>
.border-bg01 {  
  border: 1px solid #f37848 !important;
  border-radius: 5px;
}

.filter-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 440px;
  position: relative;
  overflow: hidden;
  padding: 0 10px;
}

.boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background: #343a40;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.boton span {
  position: relative;
  z-index: 2;
  transition: 0.3s ease all;
}

.boton.precio {
  width: 90px;
  color: #fff;
  background: #f37848;
}
.boton.precio span {
  position: absolute;
  left: 8px;
}

.boton.precio .icono {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: calc(100% - 35px);
  opacity: 1;
}

.boton.precio i {
  color: #fff;
  width: 40px;
  height: auto;
}

.boton.precio::after {
  content: "";
  width: 1px;
  height: 1px;
  background: none;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transition: 0.4s ease-in-out all;
  border-radius: 100px;
  transform-origin: center;
}

.boton.precio:hover::after {
  transform: scale(500);
  background: #000;
}

/* boton fecha */

.boton.fecha {
  width: 90px;
  color: #fff;
  background: #f37848;
}
.boton.fecha span {
  position: absolute;
  left: 10px;
}

.boton.fecha .icono {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: calc(100% - 40px);
  opacity: 1;
}

.boton.fecha i {
  color: #fff;
  width: 40px;
  height: auto;
}

.boton.fecha::after {
  content: "";
  width: 1px;
  height: 1px;
  background: none;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transition: 0.4s ease-in-out all;
  border-radius: 100px;
  transform-origin: center;
}

.boton.fecha:hover::after {
  transform: scale(500);
  background: #000;
}
</style>