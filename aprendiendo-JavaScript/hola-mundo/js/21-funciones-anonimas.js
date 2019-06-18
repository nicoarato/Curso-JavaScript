'use strict'

//funciones anonimas

var pelicula = function(nombre){
    return "La pelicula es : "+nombre;
}

function sumame(n1, n2, sumaYMuestra, sumaPorDos){
    var suma = n1+ n2;
   sumaYMuestra(suma);
   sumaPorDos(suma);
   return suma;
}
/*
sumame(5,7, function(dato){
    console.log("La suma es : ", dato);
},
function(dato){
console.log("El doble es : ", (dato*2));
});
*/

//ejemplo funcion de flecha
//es equivalente a definirla previamente

sumame(5,7, (dato) => {
    console.log("La suma es : ", dato);
},
(dato) => {
console.log("El doble es : ", (dato*2));
});