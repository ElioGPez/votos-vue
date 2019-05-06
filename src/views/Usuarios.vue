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
                  <td data-label="nombre" class="title">Jose</td>
                  <td data-label="apellido">Perez</td>
                  <td data-label="email">perez@gmail.com</td>
                  <td data-label="celular">381625897</td>
                  <td data-label="acciones">
                    <a href>
                      <button class="btn btn-primary">
                        <i class="fas fa-info-circle"></i>
                      </button>
                    </a>
                    <a href>
                      <button class="btn btn-warning">
                        <i class="fas fa-user-edit"></i>
                      </button>
                    </a>
                    <a href>
                      <button class="btn btn-danger">
                        <i class="fas fa-trash-alt"></i>
                      </button>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-label="nombre" class="title">Jose</td>
                  <td data-label="apellido">Perez</td>
                  <td data-label="email">perez@gmail.com</td>
                  <td data-label="celular">381625897</td>
                  <td data-label="acciones">
                    <a href>
                      <button class="btn btn-primary">
                        <i class="fas fa-info-circle"></i>
                      </button>
                    </a>
                    <a href>
                      <button class="btn btn-warning">
                        <i class="fas fa-user-edit"></i>
                      </button>
                    </a>
                    <a href>
                      <button class="btn btn-danger">
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

  </div>
</template>


<script>
export default {};
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