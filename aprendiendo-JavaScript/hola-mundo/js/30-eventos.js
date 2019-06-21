'use strict'

//Eventos del mouse

//con el evento load, el js se cargará despues de cargarse el html
window.addEventListener('load',() => {

    function cambiarColor(){
        console.log("Click");
        var bg = boton.style.background;

        if(bg == "red"){
            boton.style.background = "green";
        }else{
            boton.style.background = "red";
        }
        return true;
    }

    //una forma correcta de evitar incrustar js en el html
    //es usar el listener de eventos

    var boton = document.querySelector("#boton");
    //evento click
    boton.addEventListener('click',cambiarColor);

    //mosue hover
    boton.addEventListener('mouseover',function(){
        boton.style.color = "yellow";
    });

    //mouseout
    boton.addEventListener('mouseout',function(){
        boton.style.color="white";
    });

    //focus
    var input = document.querySelector("#nombre");
    input.addEventListener('focus',function(){
        console.log("focus - Estas haciendo foco en el input");
    });

    //blur

    input.addEventListener('blur',function(){
        console.log("blur - Estas fuera del input");
    });
    //keydown


    input.addEventListener('keydown',function(event){
        console.log("keydown - Pulsando tecla", String.fromCharCode(event.keyCode));
    });

    //keypress
    input.addEventListener('keypress',function(event){
        console.log("keypress - Tecla presionada", String.fromCharCode(event.keyCode));
    });
    //keyup
    input.addEventListener('keyup',function(event){
        console.log("keyup - Tecla soltada", String.fromCharCode(event.keyCode));
    });
});