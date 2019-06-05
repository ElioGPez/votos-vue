<template>
  <div id="cuerpo" class="container">
    <!-- TITULO -->
    <br>
    <div id="titulo">
      <h2 class="text-center">
        <b>Informe 1</b>
      </h2>
    </div>
    <hr>

    <div class="row">
      <div class="col-2">
        <label for>% de Mesas</label>
      </div>
      <div class="col-6">
        <div class="progress">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            style="width: 25%;"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >25%</div>
        </div>
      </div>
      <div class="col-4" align="center">
        <button style="margin:3px;" align="right" class="btn btn-primary">ACTUALIZAR</button>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-2 row">
        <div class="col">
          <label for>Mostrar:</label>
        </div>
      </div>
      <div id="check" class="col-3 row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" 
          v-model="checkGob"
          @change="gobernadorSelect(event)"
          >
          <label class="form-check-label" for="defaultCheck1">Gobernador</label>
        </div>
      </div>
      <div id="check" class="col-3 row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck2" 
          v-model="checkLeg"
          @change="legisladorSelect(event)"
          >
          <label class="form-check-label" for="defaultCheck2">Legislador</label>
        </div>
      </div>
      <div id="check" class="col-3 row">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck3" 
          v-model="checkInt"
          @change="IntendenteSelect(event)"
          >
          <label class="form-check-label" for="defaultCheck3">Intendente</label>
        </div>
      </div>
    </div>
          <hr>
    <!-- Tabla Gobernador -->
      <div 
      
      class="container"
      :id="gobernador"
      >
        <fieldset>
            <label for="">Gobernador</label>
          <div class>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Partido</th>
                  <th>#</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Partido" class="title">Validos</td>
                  <td data-label="#">v</td>
                  <td data-label="%">80</td>
                </tr>
                <tr>
                  <td data-label="Partido" class="title">Blanco</td>
                  <td data-label="#">b</td>
                  <td data-label="%">15</td>
                </tr>
                <tr>
                  <td data-label="Partido" class="title">Nulos</td>
                  <td data-label="#">n</td>
                  <td data-label="%">5</td>
                </tr>
                <tr>
                  <td data-label="nombre" class="title">TOTAL</td>
                  <td data-label="apellido">t</td>
                  <td data-label="email">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
          <!-- Tabla Legislador -->
      <div 
      
      class="container"
      :id="legislador"
      >
        <fieldset>
            <label for="">Legislador</label>
          <div class>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Partido</th>
                  <th>#</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Partido" class="title">Validos</td>
                  <td data-label="#">v</td>
                  <td data-label="%">80</td>
                </tr>
                <tr>
                  <td data-label="Partido" class="title">Blanco</td>
                  <td data-label="#">b</td>
                  <td data-label="%">15</td>
                </tr>
                <tr>
                  <td data-label="Partido" class="title">Nulos</td>
                  <td data-label="#">n</td>
                  <td data-label="%">5</td>
                </tr>
                <tr>
                  <td data-label="nombre" class="title">TOTAL</td>
                  <td data-label="apellido">t</td>
                  <td data-label="email">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
          <!-- Tabla Intendente -->

                <div 
      
      class="container"
      :id="legislador"
      >
        <fieldset>
            <label for="">Legislador</label>
          <div class>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Partido</th>
                  <th>#</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Partido" class="title">Validos</td>
                  <td data-label="#">v</td>
                  <td data-label="%">80</td>
                </tr>
                <tr>
                  <td data-label="Partido" class="title">Blanco</td>
                  <td data-label="#">b</td>
                  <td data-label="%">15</td>
                </tr>
                <tr>
                  <td data-label="Partido" class="title">Nulos</td>
                  <td data-label="#">n</td>
                  <td data-label="%">5</td>
                </tr>
                <tr>
                  <td data-label="nombre" class="title">TOTAL</td>
                  <td data-label="apellido">t</td>
                  <td data-label="email">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
          <!-- Tabla Intendente -->
      <div 
      
      class="container"
      >
        <fieldset>
            <label for="">Mesas</label>
          <div class>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Secciones</th>
                  <th>Departamento</th>
                  <th>Localidad</th>
                  <th>Escuela</th>
                  <th>Nº</th>
                  <th>Usuario</th>
                  <th>Fecha</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                </tr>

              </tbody>
            </table>
          </div>
        </fieldset>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        gobernador: 'gob',
        legislador: 'leg',
        intendente: 'int',
        checkGob : false,
        checkLeg : false,
        checkInt : false
    };
  },
  methods: {
      gobernadorSelect(event){
          if(this.checkGob){
              this.gobernador = '';
          }else{
              this.gobernador = 'gob';
          }
      },
      legisladorSelect(event){
          if(this.checkLeg){
              this.legislador = '';
          }else{
              this.legislador = 'leg';
          }
      },      
      IntendenteSelect(event){
          if(this.checkInt){
              this.intendente = '';
          }else{
              this.intendente = 'int';
          }
      },
  }
};
</script>

<style>
#check {
    background-color: rgb(148, 150, 161);
    margin-right: 5px;
        margin-left: 5px;
        color: aliceblue;
}
#gob {
    display: none;
}
#leg {
    display: none;
}
#int {
    display: none;
}
</style>