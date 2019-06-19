'use strict'

//arrays

var nombres = ["julio", "javier", "jacinto", "Mario", 52 , true];

var lenguajes = new Array("Php", "Js", "go", "java");

console.log(nombres[2]);

console.log(nombres.length);

/*
var elemento = parseInt(prompt("que elemento del array quieres: "));

if(elemento>=nombres.length || elemento<0){
    alert("introduce numero menor que " + nombres.length)
}else{
    alert("el elemento es "+ nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programación : </h1>");
document.write("<ul>");

/*
for(var i = 0; i<lenguajes.length;i++){
    document.write("<li>"+ lenguajes[i]+"</li>");
}
*/

lenguajes.forEach((elemento, indice, arreglo) => {
    console.log(arreglo);
    document.write("<li>"+ indice +"--" + elemento+"</li>");
});

document.write("<ul>");
