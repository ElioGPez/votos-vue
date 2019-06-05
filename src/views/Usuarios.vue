<template>
  <div id="cuerpo" class="container">
    <br>
    <div id="titulo">
      <h2 class="text-center">
        <b>LISTADO DE USUARIOS</b>
      </h2>
    </div>
    <div class="card">
      <br>
      <div class="container d-flex flex-row-reverse">
        <router-link to="/usuario/nuevo">
        <a href>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-plus-circle"></i> Nuevo Usuario
          </button>
        </a>
        </router-link>
      </div>
      <br>
      <div class="container">
        <fieldset>
          <div class>
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Celular</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Nombre" class="title">Jose</td>
                  <td data-label="Apellido">Perez</td>
                  <td data-label="Email">perez@gmail.com</td>
                  <td data-label="Celular">381625897</td>
                  <td data-label="Acciones">
                    <a href>
                      <router-link to="/usuario/info">
                      <button class="btn btn-primary">
                        <i class="fas fa-info-circle"></i>
                      </button>
                      </router-link>
                    </a>
                    <a href>
                      <router-link to="/usuario/modificar">
                      <button class="btn btn-warning">
                        <i class="far fa-edit"></i>
                      </button>        
                      </router-link>
                    </a>
                    <a href>
                      <button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" @click.prevent="eliminarUsuario()">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="Nombre" class="title">Jose</td>
                  <td data-label="Apellido">Perez</td>
                  <td data-label="Email">perez@gmail.com</td>
                  <td data-label="Celular">381625897</td>
                  <td data-label="Acciones">
                    <a href>
                      <router-link to="/usuario/info">
                      <button class="btn btn-primary">
                        <i class="fas fa-info-circle"></i>
                      </button>
                      </router-link>
                    </a>
                    <a href>
                      <router-link to="/usuario/modificar">
                      <button class="btn btn-warning">
                        <i class="far fa-edit"></i>
                      </button>        
                      </router-link>
                    </a>
                    <a href>
                      <button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" @click.prevent="eliminarUsuario()">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </fieldset>

      </div>
      
    </div>
                                  <br>
                                  <!-- Modal ELIMMINAR-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">MENSAJE DE CONFIRMACION</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div style="text-align:center" class="modal-body">
        Esta seguro que desea eliminar al Usuario {{nombre}}?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-danger">CONFIRMAR ELIMINACION</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      nombre : ""
    }

  },    
  methods: {
      eliminarUsuario(){
        
      }
    },
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
.table td {
  text-align: center;
      font-weight: bold;

}
.table tr {
  text-align: center;
}
@media screen and (max-width: 480px) {
  table tr {
    margin-bottom: 10px;
    display: block;
    background-color: rgb(243, 243, 243);
  }
  table td {
    display: block;
    text-align: right;
    font-size: 16px;
  }

  table td:last-child {
    border-bottom: 0;
  }
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: 600;
  }
  table thead {
    display: none;
  }
  .title {
    background-color: rgb(231, 231, 231);

    font-weight: bold;
  }
}
</style>