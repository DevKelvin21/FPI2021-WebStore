<template>
  <div>
    <div
      class="
        container
        ml-3
        mt-5
        overflow-auto
        lateralBar
        d-none d-sm-none d-md-none d-xl-block d-lg-block
      "
    >
      <b-container class="mb-2">
        <b-form-checkbox class="m-0" switch size="lg">Nuevo</b-form-checkbox>
      </b-container>

      <label for="marca" class="mb-1">Marca</label>
      <b-list-group class="mb-2" id="marca">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(marca, key) in marcas"
          :key="key"
        >
          <b-form-checkbox>
            {{ marca }}
          </b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>

      <label for="sistema" class="mb-1">Sistema</label>
      <b-list-group class="mb-2" id="sistema">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(sistema, key) in sistemas"
          :key="key"
        >
          <b-form-checkbox>
            {{ sistema }}
          </b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>

      <label for="pantalla" class="mb-1">Pantalla</label>
      <b-list-group class="mb-2" id="pantalla">
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          v-for="(pantalla, key) in pantallas"
          :key="key"
        >
          <b-form-checkbox>
            {{ pantalla }}
          </b-form-checkbox>
          <b-badge style="background-color: #ff7146" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lateralbar",
  data() {
    return {
      marcas: ["Iphone", "Samsung", "Xiaomi", "Nokia"],
      pantallas: ["6.2", "5.5", "5"],
      sistemas: ["Android", "Ios"],
    };
  },
};
</script>

<style scoped>
.lateralBar {
  height: 85vh;
  width: 280px;
  scroll-behavior: smooth;
  position: fixed;
}

::-webkit-scrollbar {
  width: 5px;
  height: 40px;
}
::-webkit-scrollbar-track {
  background: #f6f6f6;
}
::-webkit-scrollbar-thumb {
  background: #ff7146;
  border-radius: 20px;
}
</style>