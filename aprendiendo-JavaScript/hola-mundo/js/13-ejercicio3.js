'use strict'

/* hacer un programa que muestre
todos los numeros entre 2 numeros
introducidos por el usuario*/

var a = parseInt(prompt("ingrese A:"));
var b = parseInt(prompt("ingrese B:"));

if (a > b){
    var temp = a;
    a = b;
    b = temp;
}

document.write("<h1>De "+a+ "hasta "+ b + " están estos numeros </h1>");

for(var i = a; i<=b; i++){
    document.write(i + "<br>");
}