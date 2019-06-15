'use strict'

/* muestre todos los 
numeros divisores de un numero
introducido en prompt */

var a = parseInt(prompt("ingrese A: "));

document.write("<h1>Numeros divisores de " + a + " son: </h1>");

for(var i=1; i<=a; i++){
    if(a%i == 0){
        document.write(i + "<br>");
    }
}