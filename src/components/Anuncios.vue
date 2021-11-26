<template>
  <div class="row mx-1 mt-2">
    <Card v-for="anuncio in anuncios" :key="anuncio.id" :anuncio="anuncio" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { db } from "../db";

export default {
  name: "Anuncios",
  components: {
    Card,
  },
  data() {
    return {
      anuncios: [],
      anunciosOriginal: [],
    };
  },
  firestore: {
    anuncios: db.collection("anuncios"),
  },
  methods: {
    buscarTexto(cadena) {
      if(this.anunciosOriginal.length==0){
        this.anunciosOriginal=this.anuncios.slice();
      }else{
        this.anuncios = this.anunciosOriginal.slice();
      }
      this.limpiar();
      this.anuncios = this.anuncios.filter((item) => {
        var x = item.Titulo.toLowerCase().indexOf(cadena.toLowerCase());
        return (x >= 0)
      });
    },
    filtroRango(inicial, final){
      if(this.anunciosOriginal.length==0){
        this.anunciosOriginal=this.anuncios.slice();
      }else{
        this.anuncios = this.anunciosOriginal.slice();
      }
      this.limpiar();
      this.anuncios = this.anuncios.filter((item) => {
        if(item.Precio>= inicial && item.Precio<=final){
          return true;
        }else{
          return false;
        }
      });
    },
    limpiar() {
      if (this.anunciosOriginal.length>0) {
        this.anuncios = this.anunciosOriginal.slice();
      }
    },
    OrdenarPrecio(Ascendente){
      this.anuncios.sort((a,b)=>{
        var retorno = 1
        if(a.Precio>b.Precio)
          retorno =1
        else if(a.Precio<b.Precio)
          retorno = -1
        if(!Ascendente)
          retorno = retorno *-1
        
        return retorno
      })
    },
    OrdenarTitulo(titulo){
      this.anuncios.sort((a,b)=>{
        var auxiliar =1
        if(a.Titulo.toLowerCase()>b.Titulo.toLowerCase())
          auxiliar = 1;
        else if(a.Titulo.toLowerCase()<b.Titulo.toLowerCase())
          auxiliar = -1;  
        if(!titulo)
          auxiliar = auxiliar*-1
          
        return auxiliar
      })
    },
    filtrar(filtro){
      this.limpiar()

      if(filtro == null)
        return
      if(filtro.filsistemas == null || filtro.filpantallas == null || filtro.filmarcas == null)
        return
      
      this.anuncios = this.anuncios.filter((item) => {
          if(filtro.filsistemas.length==0 && filtro.filpantallas.length==0 && filtro.filmarcas.length==0)
            return true 
          
            // validando sistema
          if(filtro.filsistemas.length>0){
            for(var x=0 ; x<filtro.filsistemas.length; x++){
              if(item.Sistema==filtro.filsistemas[x]){
                return true
              }
            }
          }

            // validando pantalla

          if(filtro.filpantallas.length>0){
            for(var y=0 ; y<filtro.filpantallas.length; y++){
              if(item.Pantalla==filtro.filpantallas[y]){
                return true
              }
            }
          }

            // validando marca

          if(filtro.filmarcas.length>0){
            for(var z=0 ; z<filtro.filmarcas.length; z++){
              if(item.Marca==filtro.filmarcas[z]){
                return true
              }
            }
          }
          
          return false
       })            
    },
  },
  mounted() {
    this.anunciosOriginal=this.anuncios.slice();
  },
};
</script>

<style>
</style>