<template>
  <div>
    <div class=" container ml-3 mt-5 overflow-auto lateralBar d-none d-sm-none d-md-none d-xl-block d-lg-block ">
      <b-container class="mb-2">
        <b-form-checkbox class="m-0" switch size="lg">Nuevo</b-form-checkbox>
      </b-container>

      <label for="marca" class="mb-1">Marca</label>
      <b-list-group class="mb-2" id="amarca">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filmarcas" value="Iphone">Iphone</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{iphone.length}} </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filmarcas" value="Samsung">Samsung</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{samsung.length}} </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filmarcas" value="Xiaomi">Xiaomi</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{xiaomi.length}} </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filmarcas" value="Nokia">Nokia</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{nokia.length}} </b-badge>
        </b-list-group-item>
      </b-list-group>

      <label for="sistema" class="mb-1">Sistema</label>
      <b-list-group class="mb-2" id="sistema">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filsistemas" value="Ios">Ios</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{ios.length}} </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filsistemas" value="Android">Android</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{android.length}} </b-badge>
        </b-list-group-item>
      </b-list-group>

      <label for="pantalla" class="mb-1">Pantalla</label>
      <b-list-group class="mb-2" id="pantalla">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filpantallas" value="6.5">6.5</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{pantalla6.length}} </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filpantallas" value="5.5">5.5</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{pan5con5.length}} </b-badge>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <b-form-checkbox @change="emitirFiltros" v-model="filpantallas" value="5">5</b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill> {{pantalla5.length}} </b-badge>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  name: "Lateralbar",
  data() {
    return {
      filsistemas:[],
      filpantallas: [],
      filmarcas:[],
      iphone:[],samsung:[],xiaomi:[],nokia:[],android:[],ios:[],pantalla5:[],pan5con5:[],pantalla6:[],

    };
  },
  firestore :{
    iphone: db.collection("anuncios").where("Marca", "==", "Iphone"),
    samsung :db.collection("anuncios").where("Marca", "==", "Samsung"),
    xiaomi: db.collection("anuncios").where("Marca", "==", "Xiaomi"),
    nokia: db.collection("anuncios").where("Marca", "==", "Nokia"),
    android :db.collection("anuncios").where("Sistema", "==", "Android"),
    ios: db.collection("anuncios").where("Sistema", "==", "Ios"),
    pantalla6: db.collection("anuncios").where("Pantalla", "==", "6.5 Pulgadas"),
    pantalla5: db.collection("anuncios").where("Pantalla", "==", "5 Pulgadas"),
    pan5con5: db.collection("anuncios").where("Pantalla", "==", "5.5 Pulgadas"),

  },
  methods: {
    emitirFiltros(){
      var x = {filsistemas:[], filpantallas:[], filmarcas:[]}
      if(this.filsistemas.length>0)
        x.filsistemas=this.filsistemas
      if(this.filpantallas.length>0)
        x.filpantallas=this.filpantallas
      if(this.filmarcas.length>0)
        x.filmarcas=this.filmarcas

        this.$emit("cambioFiltro", x)
      
    }
  },
};
</script>

<style scoped>
.lateralBar {
  height: 85vh;
  width: 200px;
  scroll-behavior: smooth;
  position: fixed;
}

::-webkit-scrollbar {
  width: 5px;
  height: 40px;
}
::-webkit-scrollbar-track {
  background: #f6f6f6;
}
::-webkit-scrollbar-thumb {
  background: #ff7146;
  border-radius: 20px;
}

@media (min-width: 1600px) { 
  .lateralBar{
    width: 230px !important;
  }
 }

@media (min-width: 1920px) { 
  .lateralBar{
    width: 280px !important;
  }
 }
</style>