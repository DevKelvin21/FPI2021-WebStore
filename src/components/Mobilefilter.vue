<template>
    <div>
        <b-button v-b-toggle.collapse-1 variant="dark"><i class="bi bi-funnel-fill" style="color: #fff;"></i></b-button>
        <b-collapse id="collapse-1" class="mt-2 pe-4">
            <b-container class="mb-2">
               <b-form-checkbox class="m-0" v-model="checked" switch size="lg" @change="filtrarnuevos" >Nuevo</b-form-checkbox>
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
                <b-form-checkbox @change="emitirFiltros" v-model="filpantallas" value="6.5 Pulgadas">6.5</b-form-checkbox>
                <b-badge style="background-color: #ff7146" pill> {{pantalla6.length}} </b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                <b-form-checkbox @change="emitirFiltros" v-model="filpantallas" value="5.5 Pulgadas">5.5</b-form-checkbox>
                <b-badge style="background-color: #ff7146" pill> {{pan5con5.length}} </b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex justify-content-between align-items-center">
                <b-form-checkbox @change="emitirFiltros" v-model="filpantallas" value="5 Pulgadas">5</b-form-checkbox>
                <b-badge style="background-color: #ff7146" pill> {{pantalla5.length}} </b-badge>
                </b-list-group-item>
            </b-list-group>
        </b-collapse>
    </div>
</template>

<script>
import { db } from "../db";

export default {
  name : "Mobilefilter",
  data() {
    return {
      filsistemas:[],
      filpantallas: [],
      filmarcas:[],
      iphone:[],samsung:[],xiaomi:[],nokia:[],android:[],ios:[],pantalla5:[],pan5con5:[],pantalla6:[],
      checked: false,

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
    },
    filtrarnuevos(){
      if(this.checked){
        this.$emit("filtrarnuevos") 
      }
    },
  },
};
</script>

<style>
</style>