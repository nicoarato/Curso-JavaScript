'use strict'

window.addEventListener('load',function(){

    //timers
    //setInterval permite ejecutar codigo cada x seg
    //setTimeout se ejecuta una sola vez despues de x seg
    
    function invervalo(){
    var tiempo = setInterval(function(){
            console.log("Setinterval ejecutandose");
            var esH1 = document.querySelector("h1");
            if(esH1.style.fontSize == "50px")
            {
                esH1.style.fontSize = "25px";
            }else{
                esH1.style.fontSize = "50px";
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

});