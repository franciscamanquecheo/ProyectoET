<template>

<div class="registro">
  <header>
         <a href="/">
        <img src="src\views\R.jpg" alt="Trulli" width="100" height="100">
        </a>
        <span style="color: aliceblue; font-size: 60px;margin-left: 15px;">Reminders Sessions</span>
    </header> <br><br>
<h3 class="h1 p-3 bg-info bg-opacity-10 border border-success border-start-0 rounded-end d-flex justify-content-center">Registrarse</h3>
<br><br>
 <form class="border border-dark p-5 h4">
  <div class="mb-3">
    <label for="exampleInputNombres" class="form-label">Nombres</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
 
  </div>
  <div class="mb-3">
    <label for="exampleInputApellidos" class="form-label">Apellidos</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputPassword1">
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Registrar</button>
   </form>
</div>
</template>