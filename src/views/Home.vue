<template>
  <div class="home">
    <navbar></navbar>

    <div class="row mt-5">
      <div class="col-2">
        <lateralbar/>
      </div>
      <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12 col-12 mt-5">
        <filtertop/>
        <div class="row mx-1">
          <card v-for="anuncio in anuncios" :key="anuncio.id" :anuncio="anuncio"/>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Lateralbar from '../components/Lateralbar.vue'
import Card from "../components/Card.vue"
import Filtertop from "../components/Filtertop.vue"



import { db } from "../db"


export default {
  name: 'Home',
    data() {
      return {
        anuncios: [],
      }
  },
  firestore: {
      anuncios : db.collection("anuncios"),
  },
  components: {
    Navbar,
    Lateralbar,
    Card,
    Filtertop,
  }
}
</script>
