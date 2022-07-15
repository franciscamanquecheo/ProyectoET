

<template>

<div class="Sesiones">
    <header>


        <a href="/">
        <img src="src\views\R.jpg" alt="Trulli" width="100" height="100">
        </a>
        <span style="color: aliceblue; font-size: 60px;margin-left: 15px;">Reminders Sessions</span>
        
    </header>
    <br>
    <chart></chart>
    
    <div class="p-3 bg-info bg-opacity-10 border border-success border-start-0 rounded-end d-flex justify-content-center">
    <img src="./usser.jpg" class="img-fluid" width="70" height="70" alt="Usuario">
    <span class="h1 ">Nombre Usuario</span>
    </div>
<br><br>

<h3>Sesiones Completadas</h3>
<p class="h5">Datos .....</p>
<section v-if="errored">
<p>el archivo json no se lee correctamente</p>
</section>
<section v-else>
  <div v-if="loading">
  </div>
  <div v-else
  v-for="currency in info"
  :key="currency">

  <p v-bind:src="currency.id"></p>
  </div>

</section>

    <button type="button" class="btn btn-outline-success btn-lg d-grid gap-2 col-6 mx-auto position-absolute bottom-0 start-50 translate-middle-x" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Grafico
</button>
    <div class="modal" id="exampleModal" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Grafico Sesiones Completadas</h5>
       
      </div>
      <div class="modal-body">
        <p>Imagen grafico</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>



</div>


</template>

<script>

import axion from 'axios';

export default{

  el: '#sesiones',
  data(){
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted(){
    axios 
        .get('https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/')
        .then(response => {
          this.info = response.data
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  }
}

</script>














<!-- Comment 
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js" integrity="sha512-xIPqqrfvUAc/Cspuj7Bq0UtHNo/5qkdyngx6Vwt+tmbvTLDszzXM0G6c91LXmGrRx8KEPulT+AfOOez+TeVylg==" crossorigin="anonymous" referrerpolicy="no-referrer">
import { VueElement } from 'vue';
let url ='https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/'
Vue.component('chart',{
extends:VueChartJs.line,
data(){
    return{
        etiquetas: [],
        rendimiento: [],
        bgColors:["rgba(0,0,0,1.0)"]
    }
},
mounted(){
    this.mostrar()
    this.renderChart({
        labels: this.etiquetas,
        datasets:[
            {
                label: 'Graficos',
                backgroundColor: this.bgColors,
                data: this.rendimiento
            }
        ]
    }, {responsive:true, maintainAspectRadio:false})
    methods:{
        mostrar(){
            axios
            .get(url)
            .then(response => {
                response.data.array.forEach(element => {
                    this.etiquetas.push(element.descripcion)
                    this.rendimiento.push(element.rendimiento)
                });
            })
        }
    }
}

})
new Vue({
    el: '#Sesiones',
    data: {

    }
})

</script>
-->