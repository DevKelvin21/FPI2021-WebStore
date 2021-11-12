<template>
  <div class="newarticle">
    <navbar></navbar>
    <h1>This is an newarticle page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'


export default {
  name: 'Newarticle',
  components: {
    Navbar
  }
}
</script>