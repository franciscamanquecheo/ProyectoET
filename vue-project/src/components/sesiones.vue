
import { VueElement } from 'vue';

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js" integrity="sha512-xIPqqrfvUAc/Cspuj7Bq0UtHNo/5qkdyngx6Vwt+tmbvTLDszzXM0G6c91LXmGrRx8KEPulT+AfOOez+TeVylg==" crossorigin="anonymous" referrerpolicy="no-referrer">

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

<template>
<div class="Sesiones">
    <header>

        <a href="/">
        <img src="src\views\R.jpg" alt="Trulli" width="100" height="100">
        </a>
        <span style="color: aliceblue; font-size: 60px;margin-left: 15px;">Reminders Sessions</span>
        
    </header>
    <br><br>
    <chart></chart>



</div>


</template>