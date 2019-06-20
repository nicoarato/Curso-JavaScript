'use strict'
/*
1- que pida 6 nros por pantalla y los meta en un array 
2- Mostrar el array entero en el cuerpo de la pag y consola
3- Ordenarlo y mostrarlo
4- invertir y mostrarlo
5- mostrar cuantos elementos tiene el array
6- busqueda de un valor introducido por el usuario y que 
diga si está y en que posición.
*/

function mostrar(elementos,texto=""){
    document.write("<h3>"+texto+"</h3>");
    elementos.forEach((elemento, index) => {
        document.write("<p>"+elemento+ "</p>");
    });
}



var numeros = new Array();
var num;
for(var i = 0; i<6; i++){
    num = parseInt(prompt("Ingrese el nro - "+i + " :"));
    numeros.push(num);
}




//---------------------------------------------

mostrar(numeros, "Originales");
console.log(numeros);

//--------------------------------------------

//numeros.sort(); // devuelve ordenado alfabeticamente
numeros.sort(function(a, b){return a-b});
mostrar(numeros, "Ordenados");
console.log(numeros);
//-------------------------------------------


numeros.reverse();
console.log(numeros);
mostrar(numeros,"Invertidos");

//------------------------------------------
document.write("<h3>Cantidad de elementos: "+numeros.length +"</h3>");


//-------------------------------------------
var nuevo = parseInt(prompt("ingrese valor a buscar: "));

var busqueda = numeros.some(num => num == nuevo);

var indice = numeros.findIndex(nro => nro == nuevo);

if(busqueda){
    document.write("<h3> El numero se encuentra en la posición: " + indice +"</h3>");
}else{
    document.write("<h3> El numero no se encuentra en la list </h3>");
}
