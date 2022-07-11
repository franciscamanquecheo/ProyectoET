<template>

<div class="login">
  <header>

        <img src="./views/R.jpg" alt="Trulli" width="100" height="100">
        <span style="color: aliceblue; font-size: 60px;margin-left: 15px;">Reminders Sessions</span>
    </header>
    <br><br>
<h2 class="h1 p-3 bg-info bg-opacity-10 border border-success border-start-0 rounded-end d-flex justify-content-center">Iniciar Sesion</h2><br><br>
<form class="border border-dark p-5 h4 ">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div >
    <a href="/registro">
  <button type="button" class="btn btn-link btn-lg">Registrar</button>
  </a>
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Ingresar</button>
</form>


</div>
</template>
<style>
form{
   margin-right: 250px;
  margin-left: 250px;
  
}

</style>

