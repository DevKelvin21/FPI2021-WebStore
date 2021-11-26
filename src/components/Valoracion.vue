<template>
  <div class="">
    <form>
        <p class="clasificacion text-start">
            <label style="color: #343a40;">Agrega tu propia valoracion   -</label>
            <input id="radio1" type="radio" name="estrellas" value="5"><!--
            --><label for="radio1">★</label><!--
            --><input id="radio2" type="radio" name="estrellas" value="4"><!--
            --><label for="radio2">★</label><!--
            --><input id="radio3" type="radio" name="estrellas" value="3"><!--
            --><label for="radio3">★</label><!--
            --><input id="radio4" type="radio" name="estrellas" value="2"><!--
            --><label for="radio4">★</label><!--
            --><input id="radio5" type="radio" name="estrellas" value="1"><!--
            --><label for="radio5">★</label>
        </p>
    </form>
  </div>
</template>

<script>
export default {
    name : "Valoracion",
}
</script>

<style scoped>
#form {
  width: 250px;
  margin: 0 auto;
  height: 50px;
}

#form p {
  text-align: start !important;
}

#form label {
  font-size: 35px !important;
}

input[type="radio"] {
  display: none;
}

label {
  color: grey;
}

.clasificacion {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: orange;
}

input[type="radio"]:checked ~ label {
  color: orange;
}
</style>