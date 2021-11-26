<template>
  <div class="articleselected">
    <Navbar/>
    <div class="container mt-5">
      <div class="row mt-5">
        <div class="col-12 mt-5 border-bottom border-1">
          <h1 class="text-start" style="text-transform: uppercase;">{{article.Titulo}}</h1>
        </div>
        <div class="col-12 col-md-6 col-lg-7">
          <Carrousel/>
        </div>
        <div class="col-12 col-md-6 col-lg-5 px-1">
          <div class="row mt-5">
            <div class="col-12">
              <h1 class="text-start" style="color: #f37848;"> ${{article.Precio}} </h1>
            </div>
            <div class="col-12 mt-2">
              <div class="d-grid gap-2">
                <button class="btn btn-outline-dark" type="button">Comprar Ahora <i class="bi bi-wallet2"></i></button>
              </div>
            </div>
            <div class="col-12 mt-2">
              <div class="border border-1 border-secondary">
                <div class="row">
                  <div class="col-4"><i class="bi bi-info-circle"></i></div>
                  <div class="col-8"><h3>Informacion</h3></div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carrousel from '../components/Carrousel.vue'
import Navbar from "../components/Navbar.vue"
import { db } from '../db'

export default {
  name: "Articleselected",
  components: {
    Navbar,Carrousel,
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
</style>