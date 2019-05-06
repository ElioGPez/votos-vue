<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <!-- Logo -->
      <a class="navbar-brand" href="#">Sistema Votos</a>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#ca-navbar"
        aria-controls="ca-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Menu Area -->
      <div class="navbar-collapse collapse" id="ca-navbar" style>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/registro">
              <a class="nav-link">Registro de Votos</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/usuario">
              <a class="nav-link">Usuarios</a>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link">Salir</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav_mio"
};
</script>