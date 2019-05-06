<template>
  <div id="cuerpo" class="container">
    <!-- TITULO -->
    <br>
    <div id="titulo">
      <h2 class="text-center">
        <b>NUEVO USUARIO</b>
      </h2>
    </div>
    <!-- FORMULARIO -->
    <hr>
    <div class="card">
            <!-- SUBTITULO -->
      <div>
        <h4 id="subtitulo" class="text-center">
          <b>Ingrese los datos del Usuario</b>
        </h4>
      </div>
      <form class="card-body" @submit.prevent="handleSubmit">
        <!-- Input Nombre -->
        <div id="input" class="form-group">
          <label for="exampleFormControlInput1">Nombre</label>
          <input
            placeholder="Ej. Alberto Luis"
            type="text"
            class="form-control"
            v-model="nombre"
            @input="$v.nombre.$touch()"
            :class="{ error: $v.nombre.$error }"
          >
          <div v-if="$v.nombre.$dirty">
            <div v-if="!$v.nombre.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
          </div>
        </div>
        <!-- Input Apellido -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">Apellido</label>
          <input
            placeholder="Ej. Gomez"
            type="text"
            class="form-control"
            v-model="apellido"
            @input="$v.apellido.$touch()"
            :class="{ error: $v.apellido.$error }"
          >
          <div v-if="$v.apellido.$dirty">
            <div v-if="!$v.apellido.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
          </div>
        </div>
        <!-- Input Email -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">Email</label>
          <input
            placeholder="Ej. gomez@gmail.com"
            type="email"
            class="form-control"
            v-model="email"
            @input="$v.email.$touch()"
            :class="{ error: $v.email.$error }"
          >
          <div v-if="$v.email.$dirty">
            <div v-if="!$v.email.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
            <div v-if="!$v.email.email" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> El valor debe ser un Email valido
            </div>
          </div>
        </div>
        <!-- Input Celular -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">Celular</label>
          <input
            placeholder="Ej. 381632569"
            type="number"
            class="form-control"
            v-model="celular"
            @input="$v.celular.$touch()"
            :class="{ error: $v.celular.$error }"
          >
          <div v-if="$v.celular.$dirty">
            <div v-if="!$v.celular.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
          </div>
        </div>
        <!-- Input Dni -->
        <div id="input"  class="form-group">
          <label for="exampleFormControlInput1">DNI</label>
          <input
            placeholder="Ej. 35996456"
            type="number"
            class="form-control"
            v-model="dni"
            @input="$v.dni.$touch()"
            :class="{ error: $v.dni.$error }"
          >
          <div v-if="$v.dni.$dirty">
            <div v-if="!$v.dni.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">
          <b>GUARDAR USUARIO</b>
        </button>
      </form>
    </div>
    <br>
  </div>
</template>
<script>
import {
  required,
  minLength,
  between,
  integer,
  email
} from "vuelidate/lib/validators";
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
  validations: {
    nombre: {
      required
    },
    apellido: {
      required,
    },
    email: {
      required,
      email
    },
    celular: {
      required,
    },
    dni: {
      required
    }
  },
  components: {

  },
  methods: {
    onSubmit() {},
    handleSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    }
  }
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
@media screen and (max-width: 480px){
  table tr{
    margin-bottom: 10px;
    display: block;
    background-color: rgb(243, 243, 243);
  }
  table td{
    display: block;
    text-align: right;
    font-size: 16px;
  }

  table td:last-child{
    border-bottom: 0;
  }
  table td::before{
    content: attr(data-label);
    float: left;
    font-weight: 600;
  }
  table thead{
    display: none;
  }
  .title{
    background-color: rgb(231, 231, 231);
    
    font-weight: bold;
  }
}
</style>
 