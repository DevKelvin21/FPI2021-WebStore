<template>
  <div>
    <b-card  class="text-start">
        <b-card-title class="border-bottom py-2">
            <i class="bi bi-info-circle pe-2 border-end" style="height: 15px !important; color: red;"></i>
            <span class="ps-2" style="font-size: 20px;">Informacion</span>
        </b-card-title>
        <b-card-text>
        <ul>
            <li style="text-transform: uppercase;">Disponibilidad : <span style="background-color: #64DF38;" class="px-1"> En Existencia </span></li>
            <li style="text-transform: uppercase;">Vendedor : <span style="opacity: 0.7;"> {{article.Vendedor}} </span></li>
            <li style="text-transform: uppercase;">Estado : <span style="opacity: 0.7;"> {{article.Estado}} </span></li>
            <li style="text-transform: uppercase;">Liberado : <span style="opacity: 0.7;"> si </span></li>
            <li style="text-transform: uppercase;">Telefono : <span style="opacity: 0.7;"> Oculto </span></li>
            <li><a href="#descripcion" class="card-link">Ver mas</a></li>
            
        </ul>
        </b-card-text>
        <b-card-text>
            <span class="text-start" style="opacity: 0.6; font-size: 10px"> Envios disponibles</span>
        </b-card-text>            
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["article"],
};
</script>

<style>

</style>