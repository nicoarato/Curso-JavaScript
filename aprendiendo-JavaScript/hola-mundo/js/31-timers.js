'use strict'

window.addEventListener('load',function(){

    //timers
    //setInterval permite ejecutar codigo cada x seg
    //setTimeout se ejecuta una sola vez despues de x seg
    
    function invervalo(){
    var tiempo = setInterval(function(){
            console.log("Setinterval ejecutandose");
            var esH1 = document.querySelector("h1");
            if(esH1.style.color == "black")
            {
                esH1.style.color = "red";
            }else{
                esH1.style.color = "black";
            }
        }, 1000);
        return tiempo;
    }

    var tiempo = invervalo();

    var stop = document.querySelector("#stop");
    stop.addEventListener('click', function(){
        clearInterval(tiempo); // detener el intervalo.
    });

    var start = document.querySelector("#start");
    start.addEventListener('click', function(){
        tiempo = invervalo(); // iniciar el intervalo.
    });


    var tiempo2 = this.setTimeout(function(){
        console.log("setTimeout se ejecuta una vez");

        var h1_cambiado= document.querySelector('h1');
        h1_cambiado.style.color="red";
    }, 2000);


});