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
      this.limpiar();
      this.anuncios = this.anuncios.filter((item) => {
        var x = item.Marca.toLowerCase().indexOf(cadena.toLowerCase());
        return (x >= 0)
      });
    },
    limpiar() {
      if (this.anunciosOriginal.length>0) {
        this.anuncios = this.anunciosOriginal.slice();
      }
    },
  },
  mounted() {
    this.anunciosOriginal = this.anuncios.slice();
  },
};
</script>

<style>
</style>