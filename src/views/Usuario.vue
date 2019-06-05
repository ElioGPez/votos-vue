<template>
  <div id="cuerpo" class="container">
    <!-- TITULO -->
    <br>
    <div id="titulo">
      <h2 class="text-center">
        <b>INFORMACION DEL USUARIO</b>
      </h2>
    </div>
    <!-- FORMULARIO -->
    <hr>
    <div class="card">
            <!-- SUBTITULO -->
      <div>
        <h4 id="subtitulo" class="text-center">
          <b>Usuario con ID 5</b>
        </h4>
      </div>
      <form class="card-body" @submit.prevent="handleSubmit">
        <!-- Input Nombre -->
        <div id="input" class="form-group">
          <label>Nombre: </label>
        </div>
        <!-- Input Apellido -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">Apellido: {{nombre}}</label>
        </div>
        <!-- Input Email -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">Email: {{email}}</label>
        </div>
        <!-- Input Celular -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">Celular: {{celular}}</label>
        </div>
        <!-- Input Dni -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">DNI: {{dni}}</label>
        </div>
      </form>
    </div>
    <br>
  </div>
</template>
<script>

import Titulo from "@/components/Titulo.vue";
import Establecimiento from "@/components/Establecimiento.vue";

export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      celular: "",
      dni: ""
         };
  },
};
</script>

<style>
#subtitulo {
  background-color: rgb(187, 187, 187);
  color: white;
  padding: 5 px;
  padding-top: 5px;
  padding-bottom: 5px;
}

label {
  font-weight: bold;
  font-size: 20px;
}
h2 {
  background-color: rgb(228, 228, 228);
  padding: 5px;
}
#cuerpo {
  background-color: rgb(247, 247, 247);
}
input:focus {
  outline: none;
}
.error {
  border: 1px solid red;
}
.error-mensaje {
  color: red;
}

</style>
 