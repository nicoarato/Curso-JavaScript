'use strict'

/* que diga si un numero es par o impar
validar que sea un numero
 */
var a = parseInt(prompt("Introduce un numero A"));

while(isNaN(a)){
    a = parseInt(prompt("Introduce un numero A"));
}

(a%2 == 0) ? alert("Es par") : alert("Es impar");