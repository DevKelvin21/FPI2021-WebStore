<template>
  <div>
    <div class="d-xl-block d-md-none d-sm-none d-lg-block d-none">
      <div class="row mx-4">
        <div class="col-6">
          <div class="border border-bg01 mx-4 filter-top">
            <div class="input-group me-4">
              <span class="mx-1 py-2">Precio :</span>
              <input
                type="number"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <div class="input-group">
              <span class="mx-1 py-2">Hasta :</span>
              <input
                type="number"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="border border-bg01 filter-top">
            Ordenar por :
            <div class="btn">
              <button type="submit" class="boton precio mt-1">
                <div class="icono">
                  <b-icon icon="arrow-down-short"></b-icon>
                </div>
                <span>Precio</span>
              </button>
            </div>
            <div class="btn">
              <button type="submit" class="boton fecha mt-1">
                <div class="icono">
                  <b-icon icon="calendar2-date"></b-icon>
                </div>
                <span>Fecha</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "Filtertop",
};
</script>

<style>
.border-bg01 {
  border: 1px solid #f37848 !important;
  border-radius: 5px;
}

.filter-top {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 355px;
  position: relative;
  overflow: hidden;
  padding: 0 10px;
}

.boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  background: #343a40;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
}

.boton span {
  position: relative;
  z-index: 2;
  transition: 0.3s ease all;
}

.boton.precio {
  width: 90px;
  color: #fff;
  background: #f37848;
}
.boton.precio span {
  position: absolute;
  left: 8px;
}

.boton.precio .icono {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: calc(100% - 35px);
  opacity: 1;
}

.boton.precio i {
  color: #fff;
  width: 35px;
  height: auto;
}

.boton.precio::after {
  content: "";
  width: 1px;
  height: 1px;
  background: none;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transition: 0.4s ease-in-out all;
  border-radius: 100px;
  transform-origin: center;
}

.boton.precio:hover::after {
  transform: scale(500);
  background: #000;
}

/* boton fecha */

.boton.fecha {
  width: 90px;
  color: #fff;
  background: #f37848;
}
.boton.fecha span {
  position: absolute;
  left: 8px;
}

.boton.fecha .icono {
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: calc(100% - 35px);
  opacity: 1;
}

.boton.fecha i {
  color: #fff;
  width: 35px;
  height: auto;
}

.boton.fecha::after {
  content: "";
  width: 1px;
  height: 1px;
  background: none;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transition: 0.4s ease-in-out all;
  border-radius: 100px;
  transform-origin: center;
}

.boton.fecha:hover::after {
  transform: scale(500);
  background: #000;
}
</style>