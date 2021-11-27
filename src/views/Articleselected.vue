<template>
  <div class="articleselected">
    <Navbar/>
    <div class="container-fluid mt-5">
      <div class="container" style="margin-bottom: 150px;">
        <div class="row mt-5">
        <div class="col-12 mt-5 border-bottom border-1">
          <h1 class="text-start titulo" style="text-transform: uppercase;">{{article.Titulo}}</h1>
        </div>
        <div class="col-12 col-md-6 col-lg-7">
          <Carrousel :article="article"/>
        </div>
        <div class="col-12 col-md-6 col-lg-5 px-1">
          <div class="row mt-5">
            <div class="col-12">
              <Valoracion/>
              <h1 class="text-start" style="color: #f37848; font-size: 60px;"> ${{article.Precio}} </h1>
            </div>
            <div class="col-12 mt-2">
              <div class="d-grid gap-2">
                <button class="btn btn-outline-dark" type="button">Comprar Ahora <i class="bi bi-wallet2"></i></button>
              </div>
            </div>
            <div class="col-12 mt-2">
              <Details :article="article"/>
            </div>
          </div>  
        </div>
      </div>
      </div>
      <div class="row" id="descripcion">
        <div class="col-12" style="background-color: rgb(233, 233, 233);">
          <Specs :article="article"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from '../components/Carrousel.vue'
import Details from '../components/Details.vue'
import Navbar from "../components/Navbar.vue"
import Specs from '../components/Specs.vue'
import Valoracion from '../components/Valoracion.vue'
import { db } from '../db'

export default {
  name: "Articleselected",
  components: {
    Navbar,Carrousel,Details,Valoracion,
    Specs,
  },
  methods: {
    getdata(id) {
      db.collection("anuncios").doc(id).get().then((doc) => {
          if (doc.exists) {
            this.article = doc.data();
          }
        });
    },
  },
  data: () =>({
    article : {}
  }),
  mounted() {
    this.getdata(this.$route.params.id)
  }
};
</script>

<style>
 .titulo{
    font-size: 17px;
  }

@media (min-width: 750px) {
  .titulo{
    font-size: 45px;
  }
}
</style>