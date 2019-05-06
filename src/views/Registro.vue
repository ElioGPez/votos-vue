<template>
  <div id="cuerpo" class="container">
    <Titulo></Titulo>
    <Establecimiento></Establecimiento>
    <hr>
    <div class="card">
      <div>
        <h4 id="subtitulo" class="text-center">
          <b>Ingrese las cantidades de Votos</b>
        </h4>
      </div>
      <form class="card-body" @submit.prevent="handleSubmit">
        <!-- Input Votantes -->
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votantes</label>
          <input
            type="number"
            class="form-control"
            v-model="num_votantes"
            @input="$v.num_votantes.$touch()"
            :class="{ error: $v.num_votantes.$error }"
          >
          <div v-if="$v.num_votantes.$dirty">
            <div v-if="!$v.num_votantes.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
            <div v-if="!$v.num_votantes.integer" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> El valor debe ser Entero
            </div>
          </div>
        </div>
        <!-- Input Votos validos -->
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votos validos</label>
          <input
            type="number"
            class="form-control"
            v-model="votos_validos"
            @input="$v.votos_validos.$touch()"
            :class="{ error: $v.votos_validos.$error }"
          >
          <div v-if="$v.votos_validos.$dirty">
            <div v-if="!$v.votos_validos.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
            <div v-if="!$v.votos_validos.integer" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> El valor debe ser Entero
            </div>
          </div>
        </div>
        <!-- Input Votos nulos -->
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votos Nulos</label>
          <input
            type="number"
            class="form-control"
            v-model="votos_nulos"
            @input="$v.votos_nulos.$touch()"
            :class="{ error: $v.votos_nulos.$error }"
          >
          <div v-if="$v.votos_nulos.$dirty">
            <div v-if="!$v.votos_nulos.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
            <div v-if="!$v.votos_nulos.integer" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> El valor debe ser Entero
            </div>
          </div>
        </div>
        <!-- Input Votos en blanco -->
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votos en Blanco</label>
          <input
            type="number"
            class="form-control"
            v-model="votos_blanco"
            @input="$v.votos_blanco.$touch()"
            :class="{ error: $v.votos_blanco.$error }"
          >
          <div v-if="$v.votos_blanco.$dirty">
            <div v-if="!$v.votos_blanco.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Este campo es requerido
            </div>
            <div v-if="!$v.votos_blanco.integer" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> El valor debe ser Entero
            </div>
          </div>
        </div>

        <hr> 
        <div class="form-group">
          <label for="exampleFormControlSelect1">Cantidad de Votos por Partido Politico</label>
          <fieldset>
            <div class="" >
              <table class="table " >
                <thead class="thead-dark">
                  <tr>
                    <th>Lista</th>
                    <th>Partido</th>
                    <th>Votos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Lista" class="title">123</td>
                    <td data-label="Partido">Frente para la victoria</td>
                    <td data-label="Votos">
                  <input
                    v-model="lista_123"
                    type="number"
                    class="form-control"
                    :class="{ error: $v.lista_123.$error }"
                  >                    </td>
                  </tr>

                  <tr>
                    <td data-label="Lista" class="title">223</td>
                    <td data-label="Partido">Cambiemos</td>
                    <td data-label="Votos">
                  <input
                    v-model="lista_223"
                    type="number"
                    class="form-control"
                    :class="{ error: $v.lista_223.$error }"
                  >                    </td>
                  </tr>

                  <tr>
                    <td data-label="Lista" class="title">321</td>
                    <td data-label="Partido">Partido Renovador</td>
                    <td data-label="Votos">
                  <input
                    v-model="lista_321"
                    type="number"
                    class="form-control"
                    :class="{ error: $v.lista_321.$error }"
                  >                    </td>
                  </tr>

                </tbody>
              </table>

            </div>
          </fieldset>

          <div v-if="$v.lista_321.$dirty || $v.lista_123.$dirty || $v.lista_223.$dirty">
            <div v-if="!$v.lista_321.required || !$v.lista_123.required || !$v.lista_223.required" class="alert alert-danger" role="alert">
              <strong>Cuidado!</strong> Debe completar todos los campos
            </div>

          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block">
          <b>GUARDAR REGISTRO</b>
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
  integer
} from "vuelidate/lib/validators";
import Titulo from "@/components/Titulo.vue";
import Establecimiento from "@/components/Establecimiento.vue";

export default {
  data() {
    return {
      votos_validos: "",
      votos_nulos: "",
      votos_blanco: "",
      num_votantes: "",
      lista_123: "",
      lista_223: "",
      lista_321: ""
    };
  },
  validations: {
    votos_validos: {
      required,
      integer
    },
    num_votantes: {
      required,
      integer
    },
    votos_blanco: {
      required,
      integer
    },
    votos_nulos: {
      required,
      integer
    },
    lista_123: {
      required,
      integer
    },
    lista_223: {
      required,
      integer
    },
    lista_321: {
      required,
      integer
    }
  },
  components: {
    Titulo,
    Establecimiento
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
  color: black;
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
