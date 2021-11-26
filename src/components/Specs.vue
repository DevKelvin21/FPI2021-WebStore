<template>
  <div class="container">
      <div class="row">
      <div class="col-12 col-lg-6 py-3 px-2 text-start">
          <span style="text-transform: uppercase; font-size: 18px;">Generalidades</span>
          <p class="py-3" style="text-transform: uppercase; opacity: 0.7;"> {{article.Titulo}} </p>
          <span style="text-transform: uppercase; font-size: 18px;">Especificaciones</span>
          <ul class="py-3">
                <li style="text-transform: uppercase;">Estado : <span style="opacity: 0.7;"> {{article.Estado}} </span></li>
                <li style="text-transform: uppercase;">Marca : <span style="opacity: 0.7;"> {{article.Marca}} </span></li>
                <li style="text-transform: uppercase;">Modelo : <span style="opacity: 0.7;"> {{article.Modelo}} </span></li>
                <li style="text-transform: uppercase;">Sistema : <span style="opacity: 0.7;"> {{article.Sistema}} </span></li>
                <li style="text-transform: uppercase;">Almacenamiento : <span style="opacity: 0.7;"> {{article.ROM}} </span></li>
                <li style="text-transform: uppercase;">Memoria RAM : <span style="opacity: 0.7;"> {{article.RAM}} </span></li>
                <li style="text-transform: uppercase;">Pantalla : <span style="opacity: 0.7;"> {{article.Pantalla}} </span></li>
          </ul>
      </div>
      <div class="col-12 col-lg-6 py-3 px-2 text-start">
          <span style="text-transform: uppercase; font-size: 18px;">Descripcion</span>
          <p style="opacity: 0.7;">
              {{article.Descripcion}}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Specs",
    props: ["article"],
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li{
    padding: 10px 0;
    border-bottom: 1px solid #283745;
}
</style>