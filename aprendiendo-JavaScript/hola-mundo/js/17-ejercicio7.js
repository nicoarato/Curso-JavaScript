'use strict'

/* Tabla de multiplicar de un numero introducido */

var a = parseInt(prompt("De que numero quieres la tabla", 1 ));

document.write("tabla de: " + a +"<br>");
for(var i = 0; i<=10;i++){
    document.write(i + " x a = " + a*i +"<br>");
}