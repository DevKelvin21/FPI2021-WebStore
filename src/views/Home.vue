<template>
  <div class="home">
    <navbar></navbar>
    <div class="container-fluid mt-5">
      <b-row>
        <b-col cols="3">
          <lateralbar></lateralbar>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Lateralbar from '../components/Lateralbar.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Lateralbar
  }
}
</script>
