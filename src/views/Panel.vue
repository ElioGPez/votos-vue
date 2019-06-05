<template>
  <div id="cuerpo" class="container">
    <!-- TITULO -->
    <br>
    <div id="titulo">
      <h2 class="text-center">
        <b>Panel Administrativo</b>
      </h2>
    </div>
    <hr>
    <div></div>
    <div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-dark">
          <h4>Secciones</h4>
        </li>
        <li class="list-group-item">
          - 1
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button
            style="margin-left:10px;"
            align="right"
            class="btn btn-info"
            @click.prevent="desplegarDep()"
          >{{btn_1}}</button>
        </li>
        <li class="list-group-item">
          - 2
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">{{btn_2}}</button>
        </li>
        <li class="list-group-item">
          - 3
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
      </ul>
    </div>
    <div :id="departamentos">
      <br>
      <ul class="list-group">
        <li class="list-group-item list-group-item-info">
          <h5>Departamentos</h5>
        </li>
        <li class="list-group-item">
          - a
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button
            style="margin-left:10px;"
            align="right"
            class="btn btn-info"
            @click.prevent="desplegarLoc()"
          >{{btn_A}}</button>
        </li>
        <li class="list-group-item">
          - b
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
        <li class="list-group-item">
          - c
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
      </ul>
    </div>
    <div :id="localidades">
      <br>
      <ul class="list-group">
        <li class="list-group-item list-group-item-warning">
          <h5>Localidades</h5>
        </li>
        <li class="list-group-item">
          - a
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button
            style="margin-left:10px;"
            align="right"
            class="btn btn-info"
            @click.prevent="desplegarEsc()"
          >{{btn_z}}</button>
        </li>
        <li class="list-group-item">
          - b
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
        <li class="list-group-item">
          - c
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
      </ul>
    </div>
    <div :id="escuelas">
      <br>
      <ul class="list-group">
        <li class="list-group-item list-group-item-success">
          <h5>Escuelas</h5>
        </li>
        <li class="list-group-item">
          - a
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
        <li class="list-group-item">
          - b
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
        <li class="list-group-item">
          - c
          <button style="margin-left:10px;" align="right" class="btn btn-warning">VER INFORME</button>
          <button style="margin-left:10px;" align="right" class="btn btn-info">DESPLEGAR</button>
        </li>
      </ul>
    </div>

    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secciones: "sec",
      departamentos: "dep",
      localidades: "loc",
      escuelas: "esc",
      btn_1: "DESPLEGAR",
      btn_2: "DESPLEGAR",
      btn_A: "DESPLEGAR",
      btn_z: "DESPLEGAR",
      checkGob: false,
      checkLeg: false,
      checkInt: false
    };
  },
  methods: {
    desplegarDep() {
      if (this.btn_1 == "DESPLEGAR") {
        this.departamentos = "";
        this.btn_1 = "REPLEGAR";
      } else {
        this.departamentos = "dep";
        this.btn_1 = "DESPLEGAR";
      }
    },
    desplegarLoc() {
      if (this.btn_A == "DESPLEGAR") {
        this.localidades = "";
        this.btn_A = "REPLEGAR";
      } else {
        this.localidades = "loc";
        this.btn_A = "DESPLEGAR";
      }
    },
    desplegarEsc() {
      if (this.btn_z == "DESPLEGAR") {
        this.escuelas = "";
        this.btn_z = "REPLEGAR";
      } else {
        this.escuelas = "esc";
        this.btn_z = "DESPLEGAR";
      }
    }
  }
};
</script>

<style>
ul li {
  font-weight: bold;
  font-size: 20px;
}
#check {
  background-color: rgb(148, 150, 161);
  margin-right: 5px;
  margin-left: 5px;
  color: aliceblue;
}
#dep {
  display: none;
}
#loc {
  display: none;
}
#esc {
  display: none;
}
</style>