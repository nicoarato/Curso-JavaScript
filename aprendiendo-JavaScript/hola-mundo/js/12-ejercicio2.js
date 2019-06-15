'use strict'

/*Utilizando un bucle mostrar la suma
y la media de los números introducidos
hasta introducir un numero negativo y 
ahi mostrar el resultado */

var suma = 0;
var cont = 0;

var a = parseInt( prompt("Ingrese los numeros: "));
while(a>=0){
    suma += a;
    cont ++;
    a = parseInt( prompt("Ingrese los numeros: "));
}

alert("suma: " + suma);
alert("media: " + suma/cont);
