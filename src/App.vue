<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Open Sans Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #ff7146;
  background-color: #ff7146;
}
</style>
