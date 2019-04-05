<template>
  <div id="cuerpo" class="container">
    <hr>
    <div id="titulo">
      <h2 class="text-center">
        <b>REGISTRO DE VOTOS</b>
      </h2>
    </div>
    <hr>
    <div>
      <h4>Seleccione el Establecimiento</h4>
    </div>
      <div class="form-group">
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Escuela N°312</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    <div>
      <h4>Seleccione la Mesa</h4>
    </div>
      <div class="form-group">
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Mesa N°12</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
    <hr>
    <div class="card">
      <div>
        <h4 id="subtitulo" class="text-center">
          <b>Ingrese las cantidades de Votos</b>
        </h4>
      </div>
      <form class="card-body">
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votantes</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votos validos</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votos nulos</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Cantidad de votos en blanco</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Cantidad de Votos por Partido Politico</label>
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Lista</th>
                <th scope="col">Partido</th>
                <th scope="col">Votos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">123</th>
                <td>Frente para la Victoria</td>
                <td>
                    <input type="number" class="form-control">
                </td>
              </tr>
              <tr>
                <th scope="row">223</th>
                <td>Cambiemos</td>
                <td>
                    <input type="number" class="form-control">
                </td>
              </tr>
              <tr>
                <th scope="row">321</th>
                <td>Partido Renovador</td>
                <td>
                    <input type="number" class="form-control">
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block"><b>GUARDAR REGISTRO</b></button>
      </form>
    </div> 
          <br>
  </div>
</template>
<script>
export default {};
</script>

<style>
/*h2 {
  background-color: black;
  color: white;
}*/
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
h2{
    background-color:rgb(228, 228, 228);
      padding: 5px;
}
/*form{
    background-color: aliceblue;
}*/
#cuerpo{
        background-color: rgb(247, 247, 247);
}
</style>
