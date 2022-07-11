<script setup>
import TheWelcome from '@/components/login.vue'

</script>

<template>
<body class="Principal">
   
           
      
  <header>

        <img src="./R.jpg" alt="Trulli" width="100" height="100">
        <span style="color: aliceblue; font-size: 60px;margin-left: 15px;">Reminders Sessions</span>
    </header>
    <br><br>
   
  <p class="h2 p-3 bg-info bg-opacity-10 border border-success border-start-0 rounded-end d-flex justify-content-center">El sitio web permite a los usuarios de Remind conocer su rendimiento
en sesiones de estudio </p> <br><br>


  <a href="/login">
  <button  class="btn btn-primary btn-lg d-grid gap-2 col-6 mx-auto" type="button">Iniciar Sesion</button><br>
  </a>
  <a href="/registro">
  <button class="btn btn-primary btn-lg d-grid gap-2 col-6 mx-auto" type="button">Registrarse</button>
  </a>

</body>
</template>
<script>

</script>
<style>
header {
    background-color: black;
    padding: 5px;
    font-size: 20px;

        }
body{ 
           background-image: url('./fondo.jpg');
          
           
        
}



</style>
