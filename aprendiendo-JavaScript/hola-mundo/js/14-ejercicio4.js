'use strict'

/* mostrar los impares entre 2 numeros */

var a = parseInt(prompt("ingrese A: "));
var b = parseInt(prompt("ingrese B: "));

if (a > b){
    var temp = a;
    a = b;
    b = temp;
}

document.write("<h1>De "+a+ "hasta "+ b + " están estos numeros impares </h1>");


for(var i = a; i<=b; i++){
    if(i%2 != 0){
        document.write(i + "<br>");
    }
}